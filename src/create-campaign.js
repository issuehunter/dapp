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
          // TODO: let the user choose which account to use to send the txn
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
  // TODO: add transaction id and block hash
  document.getElementById("newCampaignIssueId").innerText = web3.toAscii(event.args.issueId)
  document.getElementById("newCampaignCreatedBy").innerText = event.args.creator
  document.getElementById("newCampaignTimestamp").innerText = Date(event.args.timestamp)
})
