import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/molecules/Header";
import { ContractContext } from "./context/ContractContext";
import LandingPage from "./pages/LandingPage";
import SingleAsset from "./pages/SingleAsset";
import { abi, address } from "./utils/data/contract-data";
import { fetchContract, getTokens } from "./utils/functions/contract-functions";

function App(props) {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    fetchContract().then((_contract) => setContract(_contract));
  }, []);

  return (
    <ContractContext.Provider value={{ contract }}>
      <Header />
      <HashRouter>
        <Routes>
          <Route exact path="/item/:id" element={<SingleAsset />} />
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </ContractContext.Provider>
  );
}

export default App;
