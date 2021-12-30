import React, { useContext, useEffect, useState } from "react";
import { ContractContext } from "../../context/ContractContext";
import { WalletAddressStyle } from "./atoms.style";

function WalletAddress(props) {
  const [address, setAddress] = useState("");
  const { contract } = useContext(ContractContext);

  useEffect(() => {
    if (window.eth_accounts) {
      setAddress(window.eth_accounts[0]);
    }
  }, [contract]);

  return (
    <WalletAddressStyle>
      Your Wallet Address
      <div className="address">{address}</div>
    </WalletAddressStyle>
  );
}

export default WalletAddress;
