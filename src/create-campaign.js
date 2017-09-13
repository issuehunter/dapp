web3.eth.getAccounts(function (err, accounts) {
  if (accounts && accounts.length > 0) {
    accounts.forEach(function (account) {
      var accountOption = document.createElement("option")
      accountOption.innerHTML = account
      accountOption.value = account
      document.getElementById("account").appendChild(accountOption)
    })
  } else {
    alert("Connect an account")
  }
})

function createCampaign() {
  var account = document.querySelector("#account").value
  var issueId = document.querySelector("#issueId").value
  issueHunter.createCampaign(issueId, {from: account}, function (err, res) {
    if (err) {
      alert("Error: " + err)
    } else {
      document.getElementById("newCampaignStatus").innerText = "Waiting for confirmation..."
    }
  })
}

issueHunter.CampaignCreated().watch(function (err, event) {
  document.getElementById("newCampaignStatus").innerText = "Confirmed"
  document.querySelector(".new-campaign #block").innerText = event.blockHash
  document.querySelector(".new-campaign #txn").innerText = event.transactionHash
  document.getElementById("newCampaignIssueId").innerText = web3.toAscii(event.args.issueId)
  document.getElementById("newCampaignCreatedBy").innerText = event.args.creator
  document.getElementById("newCampaignTimestamp").innerText = Date(event.args.timestamp)
})
