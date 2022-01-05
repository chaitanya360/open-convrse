import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/atoms/Loading";
import AssetCard from "../components/molecules/AssetCard";
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
          />
        ))
      )}
    </LandingPageStyle>
  );
}

export default LandingPage;
