import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.0", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555",
    },
  }
};
export default config

