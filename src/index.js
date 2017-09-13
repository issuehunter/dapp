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
