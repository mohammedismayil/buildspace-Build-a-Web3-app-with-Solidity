// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract HugSenderWithMessage{

 uint256 totalHugs;
 Hug[] hugs;
 event NewHug(address indexed from, uint256 timestamp, string message);
struct Hug {
        address hugger; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    constructor() {
        console.log("Sending Hugs...");
    }

    function hugMe(string memory _message) public {
        totalHugs += 1;
        console.log("%s has hugged!", msg.sender);

        hugs.push(Hug(msg.sender, _message, block.timestamp));
         emit NewHug(msg.sender, block.timestamp, _message);
    }

    function getTotalHugs() public view returns (uint256) {
        console.log("We have %d total hugs!", totalHugs);
        return totalHugs;
    }

    function getAllHugs()public view returns (Hug[] memory) {
        // Optional: Add this line if you want to see the contract print the value!
        // We'll also print it over in run.js as well.
        console.log("We have %d total hugs!", totalHugs);
        return hugs;
    }

}