import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/atoms/Loading";
import AssetCard from "../components/molecules/AssetCard";
import ConnectWallet from "../components/molecules/ConnectWallet";
import { ContractContext } from "../context/ContractContext";
import { assetsDummyContract } from "../utils/data/assets";
import {
  getEachToken,
  getTokens,
  transferFrom,
  transferFromToNew,
} from "../utils/functions/contract-functions";

import { LandingPageStyle } from "./pages.style";

function LandingPage(props) {
  // const [assets, setAssets] = useState([]);

  const [assets, setAssets] = useState(assetsDummyContract);

  const { contract } = useContext(ContractContext);
  const [loading, setLoading] = useState(true);
  const [showConnectWalletPanel, setShowConnectWalletPanel] = useState(false);

  async function fetchAndStoreAssets() {
    // await getEachToken(contract, (token) => {
    // setAssets((old) => [...old, token]);
    // });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    if (contract) {
      fetchAndStoreAssets();
      console.log(window.contract);
    }
  }, [contract]);

  return (
    <>
      <ConnectWallet
        setShowPanel={setShowConnectWalletPanel}
        show={showConnectWalletPanel}
      />
      <LandingPageStyle>
        {loading ? (
          <Loading />
        ) : (
          assets.map((asset) => (
            <AssetCard
              key={asset.id}
              id={asset.id}
              cost={asset.cost}
              owner={asset.owner}
              url={asset.asset_url}
              setShowConnectWalletPanel={setShowConnectWalletPanel}
            />
          ))
        )}
      </LandingPageStyle>
    </>
  );
}

export default LandingPage;
