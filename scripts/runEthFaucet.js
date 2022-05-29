const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("ETHFaucet");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("1000"),
  });
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

  const [_, randomPerson] = await hre.ethers.getSigners();
  waveTxn = await waveContract.connect(randomPerson).sendETHFromFaucet(100);
  await waveTxn.wait(); // Wait for the transaction to be mined
  let contractBalance2 = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance2)
  );
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
