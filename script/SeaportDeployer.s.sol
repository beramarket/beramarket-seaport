// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import {
    PausableZoneController
} from "seaport/zones/PausableZoneController.sol";
import {
    PausableZoneControllerInterface
} from "seaport/zones/interfaces/PausableZoneControllerInterface.sol";
import { Seaport } from "seaport/Seaport.sol";

import { console2 } from "forge-std/console2.sol";
import { Script } from "forge-std/Script.sol";
import {
    ConduitControllerInterface
} from "seaport-types/src/interfaces/ConduitControllerInterface.sol";
import { LibString } from "solady/src/utils/LibString.sol";

interface ImmutableCreate2Factory {
    function safeCreate2(
        bytes32 salt,
        bytes calldata initializationCode
    ) external payable returns (address deploymentAddress);
}

// NOTE: This script assumes that the CREATE2-related contracts have already been deployed.
contract SeaportDeployer is Script {
    ImmutableCreate2Factory private constant IMMUTABLE_CREATE2_FACTORY =
        ImmutableCreate2Factory(0x0000000000FFe8B47B3e2130213B802212439497);
    ConduitControllerInterface private constant CONDUIT_CONTROLLER =
        ConduitControllerInterface(0x00000000F9490004C11Cef243f5400493c00Ad63);

    function run() public {
        // Utilizes the locally-defined PRIVATE_KEY environment variable to sign txs.
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        address deployer = vm.addr(deployerPrivateKey);

        // Deploy the Seaport contract via ImmutableCreate2Factory.
        // Packed and ABI-encoded contract bytecode and constructor arguments.
        // NOTE: The Seaport contract *must* be compiled using the optimized profile config.
        bytes memory seaportInitCode = abi.encodePacked(
            type(Seaport).creationCode,
            abi.encode(address(CONDUIT_CONTROLLER))
        );
        bytes memory seaportSalt = abi.encodePacked(
            bytes20(deployer),
            bytes12(0x72d0ee0a6df4905b094deba4)
        );
        address seaportAddress = IMMUTABLE_CREATE2_FACTORY.safeCreate2(
            bytes32(seaportSalt),
            seaportInitCode
        );
        console2.log("Seaport address: %s", seaportAddress);

        // Deploy the PausableZoneController via ImmutableCreate2Factory.
        bytes memory zoneControllerInitCode = abi.encodePacked(
            type(PausableZoneController).creationCode,
            abi.encode(deployer)
        );
        bytes memory zoneControllerSalt = abi.encodePacked(
            bytes20(deployer),
            bytes12(0x08e0e7caac4149fe34f0053c)
        );
        address zoneControllerAddress = IMMUTABLE_CREATE2_FACTORY.safeCreate2(
            bytes32(zoneControllerSalt),
            zoneControllerInitCode
        );
        console2.log(
            "PausableZoneController address: %s",
            zoneControllerAddress
        );

        PausableZoneControllerInterface zoneController = PausableZoneControllerInterface(
                zoneControllerAddress
            );

        // Assign deployer as authorized pauser
        zoneController.assignPauser(deployer);

        // Deploy new PausableZone in the controller.
        bytes memory zoneSalt = abi.encodePacked(
            bytes20(deployer),
            bytes12(0xc165228085e7122b6422329f)
        );
        address zoneAddress = zoneController.createZone(bytes32(zoneSalt));
        console2.log("PausableZone address: %s", zoneAddress);

        // Assign deployer as operator for PausableZone
        zoneController.assignOperator(zoneAddress, deployer);

        // Create new conduit in controller
        bytes memory conduitKey = abi.encodePacked(
            bytes20(deployer),
            bytes12(0x3e9a0a17a3035e0836779ad1)
        );
        address conduitAddress = CONDUIT_CONTROLLER.createConduit(
            bytes32(conduitKey),
            deployer
        );
        console2.log("Conduit key: %s", LibString.toHexString(conduitKey));
        console2.log("Conduit address: %s", conduitAddress);

        // Assign seaport contract as approved conduit channel
        CONDUIT_CONTROLLER.updateChannel(conduitAddress, seaportAddress, true);

        vm.stopBroadcast();
    }
}
