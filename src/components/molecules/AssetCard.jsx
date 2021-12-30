import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContractContext } from "../../context/ContractContext";
import { transferFrom } from "../../utils/functions/contract-functions";
import { CardStyle } from "./molecules.style";

function AssetCard({ url, id, cost, owner }) {
  const [isOwner, setIsOwner] = useState(false);
  const { contract } = useContext(ContractContext);

  async function buyAsset() {
    transferFrom(contract, id, owner);
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
      <CardStyle>
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
          <h5 className="card-title">Asset {id}</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            labore corporis suscipit quidem?
          </p>
          <button href="#" className="btn btn-primary">
            View
          </button>

          {isOwner ? (
            <span className="you-own">You Own This Asset</span>
          ) : (
            <>
              <button className="btn btn-success" onClick={buyAsset}>
                Buy Now
              </button>
              <h5>Owner</h5>
              <span className="m-3">{owner}</span>
            </>
          )}
        </div>
      </CardStyle>
    </Link>
  );
}

export default AssetCard;
