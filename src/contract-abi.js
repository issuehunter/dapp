var contractAddress = "0xb2b2084de341e560da3d439ef5e5309d78a22a66"
var contractABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "name": "funder",
        "type": "address"
      }
    ],
    "name": "campaignFunds",
    "outputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "name": "resolutor",
        "type": "address"
      },
      {
        "name": "commitSHA",
        "type": "bytes32"
      }
    ],
    "name": "verifyResolution",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "issueManager",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "defaultRewardPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      }
    ],
    "name": "withdrawFunds",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "name": "resolutor",
        "type": "address"
      }
    ],
    "name": "campaignResolutions",
    "outputs": [
      {
        "name": "commitSHA",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      }
    ],
    "name": "withdrawSpareFunds",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "campaigns",
    "outputs": [
      {
        "name": "executed",
        "type": "bool"
      },
      {
        "name": "total",
        "type": "uint256"
      },
      {
        "name": "createdBy",
        "type": "address"
      },
      {
        "name": "rewardPeriodExpiresAt",
        "type": "uint256"
      },
      {
        "name": "executePeriodExpiresAt",
        "type": "uint256"
      },
      {
        "name": "resolutor",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "defaultExecutePeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      }
    ],
    "name": "rollbackFunds",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      }
    ],
    "name": "createCampaign",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      }
    ],
    "name": "fund",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "name": "commitSHA",
        "type": "bytes32"
      }
    ],
    "name": "submitResolution",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "CampaignCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "funder",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "CampaignFunded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "resolutor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "commitSHA",
        "type": "bytes32"
      }
    ],
    "name": "ResolutionProposed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "resolutor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "commitSHA",
        "type": "bytes32"
      }
    ],
    "name": "ResolutionVerified",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "funder",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RollbackFunds",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "resolutor",
        "type": "address"
      }
    ],
    "name": "WithdrawFunds",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "issueId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "funder",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "WithdrawSpareFunds",
    "type": "event"
  }
]
