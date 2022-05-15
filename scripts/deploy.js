const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory("SendHugs");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  // deployed contract address --0x3146c4B1893a964BCA6a05152D826c81dEd47408
  console.log("HugSender address: ", waveContract.address);
};

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
