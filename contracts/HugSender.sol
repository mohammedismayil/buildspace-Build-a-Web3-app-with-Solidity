// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SendHugs {
    uint256 totalHugs;

    constructor() {
        console.log("Sending Hugs...");
    }

    function hugMe() public {
        totalHugs += 1;
        console.log("%s has hugged!", msg.sender);
    }

    function getTotalHugs() public view returns (uint256) {
        console.log("We have %d total hugs!", totalHugs);
        return totalHugs;
    }
}
