import React from "react";
import Icon from "../atoms/Icon";
import { SidebarStyle } from "./molecules.style";

function Sidebar(props) {
  return (
    <SidebarStyle>
      <div>
        <Icon name="home" className="selected-icon" />
        <Icon name="graph" />
        <Icon name="bag" />
        <Icon name="setting" />
      </div>
      <div>
        <Icon name="logout" />
      </div>
    </SidebarStyle>
  );
}

export default Sidebar;
