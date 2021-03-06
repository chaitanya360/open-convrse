import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContractContext } from "../../context/ContractContext";
import { assets } from "../../utils/data/assets";
import {
  connectToWallet,
  transferFrom,
} from "../../utils/functions/contract-functions";
import { CardStyle } from "./molecules.style";

function AssetCard({ url, id, cost, owner, style, setShowConnectWalletPanel }) {
  const [isOwner, setIsOwner] = useState(true);
  const { contract } = useContext(ContractContext);

  // async function buyAsset() {
  //   transferFrom(contract, id, owner, cost);
  // }

  async function buyAsset() {
    if (window.connectedToMetaMask)
      await transferFrom(contract, id, owner, cost);
    else if (window.ethereum)
      await connectToWallet()
        .then(async (e) => {
          console.log("connected to metamask");
          window.connectedToMetaMask = true;
          window.eth_accounts = await window.web3.eth.getAccounts();
          console.log("ethereum accounts fetched");
          window.account = window.eth_accounts[0];
          console.log("current account ", window.account);
          transferFrom(contract, id, owner, cost);
        })
        .catch((e) => {
          console.log("not conncted ");
          window.connectedToMetaMask = false;
        });
    else {
      setShowConnectWalletPanel(true);
    }
  }

  async function checkOwner() {
    if (owner === window.account) setIsOwner(true);
  }

  useEffect(() => {
    if (contract) {
      checkOwner();
    }
  }, [contract]);

  return (
    <CardStyle>
      <div className="iframe-wrapper">
        <iframe
          title="Postwar City - Exterior Scene 3D model - Sketchfab"
          className="model-viewer"
          src={url}
          id="api-frame"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          allowFullScreen=""
        ></iframe>
      </div>
      <div className="body">
        <div className="top">
          <div className="title">{assets[id].name}</div>
          <div className="buy-btn" onClick={() => buyAsset()}>
            Buy Now
          </div>
        </div>
        <div className="desc">{assets[id].desc}</div>
        <Link
          to={`/item/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="view-btn">View</div>
        </Link>
        <div className="owner">
          <span className="title">Owner</span>{" "}
          <span className="value" title={owner}>
            {owner.substr(0, owner.length / 1.4) + "..."}
          </span>
        </div>
      </div>
    </CardStyle>
  );
}

export default AssetCard;
