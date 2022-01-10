import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Appstyle } from "./App.style";
import WalletAddress from "./components/atoms/WalletAddress";
import Header from "./components/molecules/Header";
import Sidebar from "./components/molecules/Sidebar";
import { ContractContext } from "./context/ContractContext";
import LandingPage from "./pages/LandingPage";
import SingleAsset from "./pages/SingleAsset";
import { abi, address } from "./utils/data/contract-data";
import { fetchContract, getTokens } from "./utils/functions/contract-functions";

function App(props) {
  const [contract, setContract] = useState(null);

  async function fetchAndStoreContract() {
    let _contract = await fetchContract();
    setContract(_contract);
  }

  useEffect(() => {
    // fetchContract().then((_contract) => setContract(_contract));
    fetchAndStoreContract();
  }, []);

  return (
    <Appstyle>
      <ContractContext.Provider value={{ contract }}>
        <Sidebar />
        <div className="body">
          <Header />
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/item/:id" element={<SingleAsset />} />
            </Routes>
          </HashRouter>
          <WalletAddress />
        </div>
      </ContractContext.Provider>
    </Appstyle>
  );
}

export default App;
