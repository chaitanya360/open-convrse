import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/atoms/Loading";
import AssetCard from "../components/molecules/AssetCard";
import ConnectWallet from "../components/molecules/ConnectWallet";
import { ContractContext } from "../context/ContractContext";
import {
  getEachToken,
  getTokens,
  transferFrom,
  transferFromToNew,
} from "../utils/functions/contract-functions";

import { LandingPageStyle } from "./pages.style";

function LandingPage(props) {
  const [assets, setAssets] = useState([]);
  const { contract } = useContext(ContractContext);
  const [loading, setLoading] = useState(true);
  const [showConnectWalletPanel, setShowConnectWalletPanel] = useState(false);

  async function fetchAndStoreAssets() {
    await getEachToken(contract, (token) => {
      setAssets((old) => [...old, token]);
    });
    setLoading(false);
  }

  useEffect(() => {
    if (contract) {
      fetchAndStoreAssets();
      console.log(contract);
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
              style={{ maxWidth: "400px" }}
              setShowConnectWalletPanel={setShowConnectWalletPanel}
            />
          ))
        )}
      </LandingPageStyle>
    </>
  );
}

export default LandingPage;
