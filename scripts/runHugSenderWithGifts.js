const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory(
    "HugSenderWithGifts"
  );
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("1000"),
  });
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  let waveCount;
  waveCount = await waveContract.getTotalHugs();
  console.log(waveCount.toNumber());
  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  /**
   * Let's send a few waves!
   */
  let waveTxn = await waveContract.hugMe("Love from venezula!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract
    .connect(randomPerson)
    .hugMe("Another wishes from sweden!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  let allWaves = await waveContract.getAllHugs();
  console.log(allWaves);
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
