import React, { useContext, useEffect, useState } from "react";
import AssetCard from "../components/molecules/AssetCard";
import { ContractContext } from "../context/ContractContext";
import { getEachToken, getTokens } from "../utils/functions/contract-functions";

import { LandingPageStyle } from "./pages.style";

function LandingPage(props) {
  const [assets, setAssets] = useState([]);
  const { contract } = useContext(ContractContext);

  async function fetchAndStoreAssets() {
    getEachToken(contract, (token) => {
      setAssets((old) => [...old, token]);
    });
  }

  useEffect(() => {
    if (contract) {
      fetchAndStoreAssets();
    }
  }, [contract]);

  return (
    <LandingPageStyle>
      {assets.map((asset) => (
        <AssetCard
          key={asset.id}
          id={asset.id}
          cost={asset.cost}
          url={asset.asset_url}
        />
      ))}
    </LandingPageStyle>
  );
}

export default LandingPage;
