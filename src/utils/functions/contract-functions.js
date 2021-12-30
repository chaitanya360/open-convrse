import { abi, address } from "../data/contract-data";

export async function fetchContract() {
  console.log("fetching contract ...");
  let web3 = new window.Web3(window.Web3.givenProvider);
  return await new web3.eth.Contract(abi, address);
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
  for (let i = 1; i < totalSupply; i++) {
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
  let totalSupply = await contract.methods.totalSupply().call();
  for (let i = 1; i < totalSupply; i++) {
    let token = await getTokenInfo(i, contract);
    callback(token);
  }
}
