import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/atoms/Loading";
import ConnectWallet from "../components/molecules/ConnectWallet";
import { CardStyle } from "../components/molecules/molecules.style";
import { ContractContext } from "../context/ContractContext";
import { assets } from "../utils/data/assets";
import {
  connectToWallet,
  fetchContract,
  getTokenInfo,
  transferFrom,
  transferFromToNew,
} from "../utils/functions/contract-functions";
import { SingleAssetPageStyle } from "./pages.style";

const SVG = () => (
  <svg
    className="etherium-icon"
    width="23"
    height="33"
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
            <div className="container">
              <CardStyle
                style={{
                  height: "fit-content",
                  display: "flex",
                  flex: "1",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div className="iframe-wrapper">
                  <div
                    className="body"
                    style={{ border: "none", padding: "0.5rem 1rem" }}
                  >
                    <div className="top">
                      <div className="title">{assets[assetId].name}</div>
                    </div>
                  </div>
                  <iframe
                    title="Postwar City - Exterior Scene 3D model - Sketchfab"
                    className="model-viewer single"
                    src={asset.asset_url}
                    // id="api-frame"
                    id="iframe"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking="true"
                    execution-while-out-of-viewport="true"
                    execution-while-not-rendered="true"
                    web-share="true"
                    allowFullScreen=""
                    style={{ height: "500px" }}
                  ></iframe>
                </div>

                <div className="body" style={{ marginTop: "12rem" }}>
                  <div
                    className="desc"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "20px",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    {assets[assetId].desc}
                    {assets[assetId].features.map((feature) => (
                      <table>
                        <tr>
                          <td> {feature.key} :</td>
                          <td>
                            {" "}
                            <b>{feature.value}</b>
                          </td>
                        </tr>
                      </table>
                    ))}
                  </div>
                  <div
                    className="price-wrapper"
                    style={{
                      margin: "1rem 0",
                      padding: "1rem",
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      width: "fit-content",
                    }}
                  >
                    <div className="title">Current Price</div>
                    <div style={{ marginTop: "1rem" }}>
                      <SVG />
                      <div
                        style={{ display: "inline-block", fontWeight: "bold" }}
                      >
                        <span style={{ marginLeft: "1rem" }}>Eth</span>
                        <span style={{ marginLeft: "0.5rem" }}>
                          {asset.cost / 1000000000000000000} ($
                          {(
                            (asset.cost / 1000000000000000000) *
                            404554
                          ).toFixed(2)}
                          )
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="top">
                    <div className="buy-btn" onClick={buyAsset}>
                      Buy Now
                    </div>
                  </div>

                  {isOwner ? (
                    <span className="you-own">
                      You are The Owner of This Asset
                    </span>
                  ) : (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          paddingTop: "0.4rem",
                        }}
                      >
                        <div
                          className="owner"
                          style={{
                            margin: "0.5rem 0",
                            display: "flex",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            className="title"
                            style={{
                              fontSize: "1rem",
                              padding: "0.4rem 0",
                              marginRight: "1rem",
                            }}
                          >
                            Owner
                          </span>
                          <span
                            className="value"
                            title={asset.owner}
                            style={{
                              fontSize: "1rem",
                              marginLeft: "0",
                              padding: "0.4rem 0",
                            }}
                          >
                            {asset.owner.substr(0, asset.owner.length / 1.4) +
                              "..."}
                          </span>
                        </div>
                      </div>
                    </>
                  )}

                  {assets[assetId].tour && (
                    <>
                      <h5 style={{ marginTop: "2rem" }}>Virtual Tour</h5>
                      <iframe
                        width="100%"
                        height="640"
                        style={{
                          width: "100%",
                          height: "640px",
                          border: "none",
                          maxWidth: " 100%",
                        }}
                        frameBorder="0"
                        allowFullScreen
                        allow="xr-spatial-tracking; gyroscope; accelerometer"
                        scrolling="no"
                        src={assets[assetId].tour}
                      ></iframe>
                    </>
                  )}
                </div>
              </CardStyle>

              <div>
                <CardStyle style={{ width: "fit-content" }}></CardStyle>
              </div>
            </div>
          )
        )}
      </SingleAssetPageStyle>
    </>
  );
}

export default SingleAsset;
