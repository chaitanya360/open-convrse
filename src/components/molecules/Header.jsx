import React from "react";
import { Link } from "react-router-dom";
import Icon from "../atoms/Icon";
import { HeaderStyle } from "./molecules.style";

function Header(props) {
  return (
    <HeaderStyle>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="left" style={{ width: "100%" }}>
          <div className="logo-wrapper">
            <img src={`${process.env.PUBLIC_URL}/icons/convrse.svg`} />
          </div>
          <div className="title" style={{ width: "100", textAlign: "center" }}>
            Marketspace
          </div>
          {/* <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          aliquid commodi aperiam perferendis dolorum necessitatibus est
          delectus quod sunt facilis.
        </div> */}
        </div>
      </Link>
      {/* <div className="right">
        <Icon name="user" />
      </div> */}
    </HeaderStyle>
  );
}

export default Header;
