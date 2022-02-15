/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC1155Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Interface__factory>;
    getContractFactory(
      name: "ERC20Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Interface__factory>;
    getContractFactory(
      name: "ERC721Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Interface__factory>;
    getContractFactory(
      name: "Consideration",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Consideration__factory>;
    getContractFactory(
      name: "ConsiderationInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConsiderationInterface__factory>;
    getContractFactory(
      name: "ERC1155Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Interface__factory>;
    getContractFactory(
      name: "ERC20Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Interface__factory>;
    getContractFactory(
      name: "ERC721Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Interface__factory>;
    getContractFactory(
      name: "ConsiderationInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConsiderationInterface__factory>;

    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC1155Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Interface>;
    getContractAt(
      name: "ERC20Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Interface>;
    getContractAt(
      name: "ERC721Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Interface>;
    getContractAt(
      name: "Consideration",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Consideration>;
    getContractAt(
      name: "ConsiderationInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConsiderationInterface>;
    getContractAt(
      name: "ERC1155Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Interface>;
    getContractAt(
      name: "ERC20Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Interface>;
    getContractAt(
      name: "ERC721Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Interface>;
    getContractAt(
      name: "ConsiderationInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConsiderationInterface>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}