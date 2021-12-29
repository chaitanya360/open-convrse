import { abi, address } from "../data/contract-data";

export async function fetchContract() {
  console.log("fetching contract ...");
  let web3 = new window.Web3(window.Web3.givenProvider);
  return await new web3.eth.Contract(abi, address);
}

export const getTokenInfo = async (tokenId, contract) => {
  console.log("fetching token info..." + tokenId);
  return await contract.methods.getTokenInfo(tokenId).call();
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

export async function getEachToken(contract, callback) {
  let totalSupply = await contract.methods.totalSupply().call();
  for (let i = 1; i < totalSupply; i++) {
    let token = await getTokenInfo(i, contract);
    token = { ...token, id: i };
    callback(token);
  }
}
