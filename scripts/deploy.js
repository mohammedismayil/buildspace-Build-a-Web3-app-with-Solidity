const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const waveContractFactory = await hre.ethers.getContractFactory(
    "JokerTestToken"
  );
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  // deployed contract address --0x3146c4B1893a964BCA6a05152D826c81dEd47408

  //18may deployed address -0x4E4c2C0eC4A9F5b2e32D6F6586BeeEeA23D3E1C3

  //19may deployed address 0x5b5e57Ba9329d13aF2c70a4f5e6ae2629Ea493af

  //21may WavePortal address:  0xc6dA53Ba23D3540d66FF540eA85AA665350Ed202--  with 'wait 15m' error restrictions

  //22 may contract address : 0x8f67AeE909E67b70cf929f81cfB448fDA24cE628-- It can receive ether..YAYYYYYYYYYYYY..

  //withdraw eth from CA: 0x0976307C69763eAE4DF205471bfcc9e1c451Ee02

  //withdraw eth from CA (input changed to ether not wei)-0xb5feaff0910964bdcaec6640928236a2c8cf71ea-- Actually it should be in wei

  //new erc20 token created -- 0x14550195d9d4D9590850F91b4658bD6d7b6278Be
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
