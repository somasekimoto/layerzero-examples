import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
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
    // polygon_mumbai: {
    //   url: process.env.NODE_URL_TESTNET_POLYGON_MUMBAI,
    //   accounts: [
    //     process.env.PRIVATE_KEY_LENDER_TESTNET_POLYGON_MUMBAI!,
    //     process.env.PRIVATE_KEY_RENTER_TESTNET_POLYGON_MUMBAI!
    //   ],
    // },
  }
};

export default config;
