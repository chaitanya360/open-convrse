import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/atoms/Loading";
import ConnectWallet from "../components/molecules/ConnectWallet";
import { CardStyle } from "../components/molecules/molecules.style";
import { ContractContext } from "../context/ContractContext";
import {
  connectToWallet,
  fetchContract,
  getTokenInfo,
  transferFrom,
  transferFromToNew,
} from "../utils/functions/contract-functions";
import { SingleAssetPageStyle } from "./pages.style";

const tourUrls = {
  1: "https://kuula.co/share/collection/7qYhb?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
  2: "https://kuula.co/share/collection/7qYhs?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1",
  3: "https://kuula.co/share/collection/7qYhQ?logo=0&info=1&fs=1&vr=0&sd=1&thumbs=1",
};

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
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showConnectWalletPanel, setShowConnectWalletPanel] = useState(false);

  async function buyAsset() {
    if (window.connectedToMetaMask)
      await transferFrom(contract, assetId, asset.owner, asset.cost);
    else if (window.ethereum)
      await connectToWallet()
        .then(async (e) => {
          console.log("connected to metamask");
          window.connectedToMetaMask = true;
          window.eth_accounts = await window.web3.eth.getAccounts();
          console.log("ethereum accounts fetched");
          window.account = window.eth_accounts[0];
          console.log("current account ", window.account);
          transferFrom(contract, assetId, asset.owner, asset.cost);
        })
        .catch((e) => {
          console.log("not conncted ");
          window.connectedToMetaMask = false;
        });
    else {
      setShowConnectWalletPanel(true);
    }
  }

  async function fetchAndSetAsset() {
    let token = await getTokenInfo(assetId, contract);
    if (token.owner === window.account) setIsOwner(true);
    setAsset(token);
    setLoading(false);
  }

  useEffect(() => {
    if (contract) {
      fetchAndSetAsset();
    }
  }, [contract]);

  return (
    <>
      <ConnectWallet
        setShowPanel={setShowConnectWalletPanel}
        show={showConnectWalletPanel}
      />
      <SingleAssetPageStyle>
        {loading ? (
          <Loading />
        ) : (
          asset && (
            <>
              <div className="container">
                <CardStyle
                  style={{
                    height: "fit-content",
                    display: "flex",
                    flex: "1",
                    flexDirection: "column",
                  }}
                >
                  <h5>Asset {assetId} - Model</h5>
                  <iframe
                    title="Postwar City - Exterior Scene 3D model - Sketchfab"
                    className="model-viewer single"
                    src={asset.asset_url}
                    id="api-frame"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true"
                    execution-while-not-rendered="true"
                    web-share="true"
                    allowFullScreen=""
                  ></iframe>
                </CardStyle>

                <div>
                  <CardStyle style={{ height: "fit-content" }}>
                    <div className="title">Highest offer</div>
                    <h3 className="price">
                      <SVG />
                      <span>
                        {asset.cost / 1000000000000000000} ($
                        {((asset.cost / 1000000000000000000) * 404554).toFixed(
                          2
                        )}{" "}
                        )
                      </span>
                    </h3>
                    {isOwner ? (
                      <span className="you-own">
                        You are The Owner of This Asset
                      </span>
                    ) : (
                      <>
                        <button className="btn btn-success" onClick={buyAsset}>
                          Buy Now
                        </button>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            paddingTop: "0.4rem",
                          }}
                        >
                          <span style={{ fontSize: "1.4rem" }}>Owner</span>
                          <span style={{ margin: "0 1rem" }}>
                            {" "}
                            {asset.owner}
                          </span>
                        </div>
                      </>
                    )}
                  </CardStyle>
                  <CardStyle style={{ height: "fit-content" }}>
                    <div className="title">Description</div>
                    <h3 className="price">
                      <span>Asset {assetId}</span>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quod magnam officia, quisquam perspiciatis dignissimos
                      facilis itaque eveniet temporibus dicta quibusdam nostrum
                      rem saepe provident doloremque. Accusamus quasi minus
                      accusantium ratione. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Recusandae accusantium
                      facere harum porro alias ad. Sed beatae reiciendis
                    </p>
                  </CardStyle>
                </div>
              </div>
              <CardStyle
                style={{
                  height: "fit-content",
                  display: "flex",
                  flex: "1",
                  flexDirection: "column",
                }}
              >
                <h5>Virtual Tour</h5>
                <iframe
                  width="98%"
                  height="auto"
                  style={{
                    width: "98%",
                    height: "80vh",
                    border: "none",
                    margin: "auto",
                  }}
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking; gyroscope; accelerometer"
                  scrolling="no"
                  src={tourUrls[assetId]}
                ></iframe>
              </CardStyle>
            </>
          )
        )}
      </SingleAssetPageStyle>
    </>
  );
}

export default SingleAsset;
