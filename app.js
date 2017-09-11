var web3

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider)
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}

web3.eth.getCoinbase(function (err, coinbase) {
  if (coinbase) {
    document.getElementById("coinbase").innerText = coinbase
    web3.eth.getBalance(coinbase, function (err, res) {
      document.getElementById("balance").innerText = web3.fromWei(res)
    })
  } else {
    document.getElementById("coinbase").innerText = "Connect an account"
  }
})

web3.eth.getAccounts(function (err, accounts) {
  if (accounts && accounts.length > 0) {
    document.getElementById("accounts").innerText = accounts
  } else {
    document.getElementById("accounts").innerText = "Connect an account"
  }
})

web3.eth.filter("latest").watch(function (err, blockHash) {
  web3.eth.getBlock(blockHash, function (err, block) {
    document.getElementById("latestBlock").innerText = block.number
    document.getElementById("latestBlockHash").innerText = block.hash
    document.getElementById("latestBlockTimestamp").innerText = Date(block.timestamp)
  })
})

var IssueHunter = web3.eth.contract(contractABI)
var issueHunter = IssueHunter.at(contractAddress)

function createCampaign() {
  var createCampaignTxn = function (address) {
    var issueId = document.querySelector("#issueId").value
    issueHunter.createCampaign(issueId, {from: address}, function (err, res) {
      if (err) {
        alert("Error: " + err)
      } else {
        document.getElementById("newCampaignStatus").innerText = "Waiting for confirmation..."
      }
    })
  }

  web3.eth.getCoinbase(function (err, coinbase) {
    if (coinbase) {
      createCampaignTxn(coinbase)
    } else {
      web3.eth.getAccounts(function (err, accounts) {
        if (accounts && accounts.length > 0) {
          // TODO: let the user select what account to use to send the txn
          // Use the first account in the list of accounts managed by the node
          createCampaignTxn(accounts[0])
        } else {
          alert("Connect an account")
        }
      })
    }
  })
}

issueHunter.CampaignCreated().watch(function (err, event) {
  document.getElementById("newCampaignStatus").innerText = "Confirmed"
  document.getElementById("newCampaignIssueId").innerText = web3.toAscii(event.args.issueId)
  document.getElementById("newCampaignCreatedBy").innerText = event.args.creator
  document.getElementById("newCampaignTimestamp").innerText = Date(event.args.timestamp)
})
