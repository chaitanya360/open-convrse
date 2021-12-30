import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardStyle } from "../components/molecules/molecules.style";
import { ContractContext } from "../context/ContractContext";
import {
  fetchContract,
  getTokenInfo,
} from "../utils/functions/contract-functions";

const SVG = () => (
  <svg
    className="etherium-icon"
    width="33"
    height="53"
    viewBox="0 0 33 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3576 0.666687L16.0095 1.85009V36.1896L16.3576 36.5371L32.2976 27.115L16.3576 0.666687Z"
      fill="#343434"
    />
    <path
      d="M16.3578 0.666687L0.417816 27.115L16.3578 36.5372V19.8699V0.666687Z"
      fill="#8C8C8C"
    />
    <path
      d="M16.3575 39.5552L16.1613 39.7944V52.0268L16.3575 52.6L32.307 30.1378L16.3575 39.5552Z"
      fill="#3C3C3B"
    />
    <path
      d="M16.3578 52.5998V39.5551L0.417816 30.1377L16.3578 52.5998Z"
      fill="#8C8C8C"
    />
    <path
      d="M16.3575 36.537L32.2973 27.1151L16.3575 19.8699V36.537Z"
      fill="#141414"
    />
    <path
      d="M0.417816 27.1151L16.3576 36.537V19.8699L0.417816 27.1151Z"
      fill="#393939"
    />
  </svg>
);

function SingleAsset() {
  const params = useParams();
  const assetId = params.id;
  const { contract } = useContext(ContractContext);
  const [asset, setAsset] = useState(null);

  async function fetchAndSetAsset() {
    let token = await getTokenInfo(assetId, contract);
    console.log(token);
    setAsset(token);
  }

  useEffect(() => {
    if (contract) {
      fetchAndSetAsset();
    }
  }, [contract]);

  return (
    <div style={{ display: "flex" }}>
      {asset && (
        <>
          <CardStyle style={{ minWidth: "500px" }}>
            <h5>Asset {assetId}</h5>
            <img src={asset.asset_url} className="card-img-top" alt="..."></img>
          </CardStyle>
          <div>
            <CardStyle style={{ minWidth: "500px", height: "fit-content" }}>
              <span>Highest offer</span>
              <h3 className="price">
                <SVG />
                <span>
                  {asset.cost} (${asset.cost * 3.34} )
                </span>
              </h3>
              <button className="btn btn-success">Buy Now</button>
              <button className="btn btn-info">Make offer</button>
              <h5>Owner</h5>
              <span className="m-3">{asset.owner}</span>
            </CardStyle>
            <CardStyle style={{ minWidth: "500px", height: "fit-content" }}>
              <span>Description</span>
              <h3 className="price">
                <span>Asset {assetId}</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                magnam officia, quisquam perspiciatis dignissimos facilis itaque
                eveniet temporibus dicta quibusdam nostrum rem saepe provident
                doloremque. Accusamus quasi minus accusantium ratione. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Recusandae
                accusantium facere harum porro alias ad. Sed beatae reiciendis
              </p>
            </CardStyle>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleAsset;
