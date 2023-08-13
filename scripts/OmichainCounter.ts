import {HardhatRuntimeEnvironment} from 'hardhat/types';
import hre from 'hardhat';
import * as LZ_ENDPOINTS from "../constants/layerzeroEndpoints.json"
import dotenv from 'dotenv';
dotenv.config();

 async function main () {

    // get the Endpoint address
    const endpointAddr = (LZ_ENDPOINTS as any)[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint address: ${endpointAddr}`)
    const signer = (await hre.ethers.getSigners())[0]


    const transactions = await hre.ethers.deployContract("OmniCounter", [endpointAddr], signer)
    await transactions.waitForDeployment();
    console.log(`[${hre.network.name}] Contract deployed at: ${transactions.target}`)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });