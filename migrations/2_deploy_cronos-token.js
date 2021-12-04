// async function main() {
//     const CronosToken = await hre.ethers.getContractFactory("CronosToken");
//     const cronosToken = await CronosToken.deploy("Cronos Token", "CRT", "1000000000000000000000000");

//     await cronosToken.deployed();

//     console.log("CronosToken deployed to:", cronosToken.address);
// }
const CrowSwapFactory = artifacts.require("CrowSwapFactory");
const CrowSwapERC20 = artifacts.require("CrowSwapERC20");
const CrowSwapPair = artifacts.require("CrowSwapPair");

const feeToSetter = '0xE871fF8D355A351C21c5C4423874b141DA23ee43';

module.exports = function(deployer) {
   deployer.deploy(CrowSwapFactory, feeToSetter);
//  deployer.deploy(CrowSwapPair);
};