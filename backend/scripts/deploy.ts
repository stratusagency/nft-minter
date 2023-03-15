import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("ERC721");
  const interactContract = await contract.deploy("MyNFT", "MNFT");

  await interactContract.deployed();

  console.log("Smart Contract Deployed at " + interactContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
