import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContractContext } from "../../context/ContractContext";
import { transferFrom } from "../../utils/functions/contract-functions";
import { CardStyle } from "./molecules.style";

const assets = {
  1: {
    name: "Post War City",
    desc: "A city ruin environment suited to build battle games and experiences. Constructed with a low a poly method with light textures.",
  },
  2: {
    name: "Martial Art House",
    desc: "A battle ready martial art house made with original chinese bamboo. The space offers real life environment to battle.",
  },
  3: {
    name: "Cathedral",
    desc: "An old cathedral environment suited for RPG and Fantasy experiences. It has defined entries and exits and hidden spaces which can be utilised applying one’s creativity.",
  },
};

function AssetCard({ url, id, cost, owner, style }) {
  const [isOwner, setIsOwner] = useState(false);
  const { contract } = useContext(ContractContext);

  async function buyAsset() {
    transferFrom(contract, id, owner, cost);
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
    <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <CardStyle style={style}>
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
        <div className="card-body">
          <h5 className="card-title">{assets[id].name}</h5>
          <p>{assets[id].desc}</p>
          <div className="btn-container">
            {isOwner ? (
              <>
                <button href="#" className="btn btn-primary">
                  View
                </button>
                <span className="you-own">You Own This Asset</span>
              </>
            ) : (
              <div className="buy-container">
                <button href="#" className="btn btn-primary">
                  View
                </button>
                <button className="btn btn-success" onClick={buyAsset}>
                  Buy Now
                </button>
                <div style={{ marginTop: "10px" }}>
                  <span className="m-3">Owner : </span>
                  <span className="m-2" title={owner}>
                    {owner.substr(0, owner.length / 2) + "..."}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardStyle>
    </Link>
  );
}

export default AssetCard;
