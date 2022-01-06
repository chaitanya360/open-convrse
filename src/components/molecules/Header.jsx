import React from "react";
import { HeaderStyle } from "./molecules.style";

function Header(props) {
  return (
    <HeaderStyle>
      <img
        className="converse-logo"
        src={`${process.env.PUBLIC_URL}/logo512.png`}
      />
      <div className="title">NFT Marketspace</div>
    </HeaderStyle>
  );
}

export default Header;
