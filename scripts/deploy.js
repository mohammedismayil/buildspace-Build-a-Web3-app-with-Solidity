const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory(
    "HugSenderWithMessage"
  );
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  // deployed contract address --0x3146c4B1893a964BCA6a05152D826c81dEd47408

  //18may deployed address -0x4E4c2C0eC4A9F5b2e32D6F6586BeeEeA23D3E1C3

  //19may deployed address 0x5b5e57Ba9329d13aF2c70a4f5e6ae2629Ea493af
  console.log("HugSender address: ", waveContract.address);
};;

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
