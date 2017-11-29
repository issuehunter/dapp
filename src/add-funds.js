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

function addFunds() {
  var account = document.querySelector("#account").value
  var issueId = document.querySelector("#issueId").value
  var amount = document.querySelector("#amount").value
  issueHunter.fund(issueId, {from: account, value: web3.toWei(amount)}, function (err, res) {
    if (err) {
      alert("Error: " + err)
    } else {
      document.querySelector("#issueId").value = ""
      document.querySelector("#amount").value = ""
      document.querySelector(".add-funds #status").innerText = "Waiting for confirmation..."
    }
  })
}

// TODO: listen for CampaignFunded events for a specific issue id
issueHunter.CampaignFunded().watch(function (err, event) {
  document.querySelector(".add-funds #status").innerText = "Confirmed"
  document.querySelector(".add-funds #block").innerText = event.blockHash
  document.querySelector(".add-funds #txn").innerText = event.transactionHash
  document.querySelector(".add-funds #infoIssueId").innerText = web3.toAscii(event.args.issueId)
  document.querySelector(".add-funds #funder").innerText = event.args.funder
  document.querySelector(".add-funds #timestamp").innerText = Date(event.args.timestamp)
  document.querySelector(".add-funds #infoAmount").innerText = web3.fromWei(event.args.amount)
})
