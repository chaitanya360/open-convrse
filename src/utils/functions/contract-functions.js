import { abi, address } from "../data/contract-data";

export async function connectToMetaMask() {
  if (window.ethereum) {
    console.log("ethe wallet connect request send to browser");
    await window.ethereum.send("eth_requestAccounts");
    console.log("ethe wallet request granded");
    let web3 = new window.Web3(window.ethereum);
    console.log("web3 object is created");
    window.eth_accounts = await web3.eth.getAccounts();
    console.log("ethereum accounts fetched");
    window.account = window.eth_accounts[0];
    window.contract = new web3.eth.Contract(abi, address);
    console.log("contract saved");
    console.log("current account ", window.account);
  }
}

export async function fetchContract() {
  console.log("fetching contract ...");
  await connectToMetaMask();
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
  let totalSupply = await contract.methods
    .totalSupply()
    .call()
    .catch((e) => console.log("error getting total supply", e));
  for (let i = 1; i <= totalSupply; i++) {
    let token = await getTokenInfo(i, contract);
    callback(token);
  }
}

export async function transferFrom(contract, tokenId, owner) {
  console.log("initiated transfer from: ", owner, " for ", tokenId);
  return await contract.methods
    .transferFrom(owner, window.account, tokenId)
    .send({ from: window.account })
    .then((e) => window.location.reload());
}

// rough

// 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
