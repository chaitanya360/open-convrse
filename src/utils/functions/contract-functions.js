import { abi, address } from "../data/contract-data";
export async function setup() {
  window.web3 = new window.Web3(
    window.ethereum ||
      "https://rinkeby.infura.io/v3/7ebe72593b8041d0b0713d80637564dd"
  );
  console.log("web3 object is created");
  console.log("contract saved");
  if (window.ethereum) {
    window.eth_accounts = await window.web3.eth.getAccounts();
    window.ethereum.on("accountsChanged", async (accounts) => {
      if (accounts.length > 0) {
        console.log(`Account connected: ${accounts[0]}`);
        window.connectedToMetaMask = true;
        window.eth_accounts = await window.web3.eth.getAccounts();
        console.log("ethereum accounts fetched");
        window.account = window.eth_accounts[0];
        console.log("current account ", window.account);
      } else {
        console.log("Account disconnected");
        window.connectedToMetaMask = false;
      }
    });
  }
  window.contract = new window.web3.eth.Contract(abi, address);
}

export async function connectToWallet() {
  console.log("metamask is installed");
  console.log("ethe wallet connect request send to browser");
  return window.ethereum.send("eth_requestAccounts");
}

export async function fetchContract() {
  console.log("fetching contract ...");
  await setup();
  return window.contract;
}

export const getTokenInfo = async (tokenId, contract) => {
  console.log("fetching token info..." + tokenId);
  let token = await contract.methods.getTokenInfo(tokenId).call();
  let owner = await getTokenOwner(contract, tokenId);
  token = { ...token, id: tokenId, owner };
  return token;
};

export async function getTokens(contract) {
  let tokens = [];
  let totalSupply = await contract.methods.totalSupply().call();
  for (let i = 1; i <= totalSupply; i++) {
    console.log("fetching token info..." + i);
    let token = await getTokenInfo(i, contract);
    tokens.push(token);
  }
  console.log("total supply : ", totalSupply);
  return tokens;
}

export async function getTokenOwner(contract, tokenId) {
  return await contract.methods.ownerOf(tokenId).call();
}

export async function getEachToken(contract, callback) {
  console.log("fetching each token ...");
  let totalSupply = await contract.methods
    .totalSupply()
    .call()
    .catch((e) => console.log("error getting total supply", e));

  console.log("total supply : ", totalSupply);
}

export async function transferFrom(contract, tokenId, owner, cost) {
  console.log(
    "initiated transfer from: ",
    owner,
    " token id: ",
    tokenId,
    " for ether : ",
    cost
  );
  return await contract.methods
    .safeTransfer(owner, window.account, tokenId)
    .send({
      from: window.account,
      value: cost,
    })
    .then((e) => window.location.reload())
    .catch((e) => console.log("error", e));
}

export async function transferFromToNew(contract, tokenId, owner) {}

// rough

// 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
