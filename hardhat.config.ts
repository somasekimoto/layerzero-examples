import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: process.env.SCAN_API_KEY,
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    currency: "USD",
    token: process.env.GAS_REPORTER_TOKEN,
    coinmarketcap: process.env.COIN_MARKET_CAP_API_KEY,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    goerli: {
        url: process.env.GOERLI_RPC_URL!,
        chainId: 5,
        accounts: [
            process.env.PRIVATE_KEY!,
          ],
    },
    mumbai: {
        url: process.env.MUMBAI_RPC_URL!,
        chainId: 80001,
        accounts: [
            process.env.PRIVATE_KEY!,
          ],
    },
  }
};

export default config;
