var web3

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider)
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}

var IssueHunter = web3.eth.contract(contractABI)
var issueHunter = IssueHunter.at(contractAddress)
