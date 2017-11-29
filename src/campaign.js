var issueId = decodeURIComponent(window.location.search.substr(1))

issueHunter.campaigns(issueId, function(err, campaign) {
  console.log(campaign)
  document.querySelector("#executed").innerText = campaign[0]
  document.querySelector("#totalAmount").innerText = web3.fromWei(campaign[1])
  document.querySelector("#createdBy").innerText = campaign[2]
  document.querySelector("#rewardPeriodExpiresAt").innerText = Date(campaign[3])
  document.querySelector("#executePeriodExpiresAt").innerText = Date(campaign[4])
  document.querySelector("#resolutor").innerText = campaign[5]
})

function campaignFunds() {
  var account = document.querySelector("#account").value
  issueHunter.campaignFunds.call(issueId, account, function (err, amount) {
    document.querySelector("#amount").innerText = web3.fromWei(amount)
  })
}
