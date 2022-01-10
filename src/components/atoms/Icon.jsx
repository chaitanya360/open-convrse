import React from "react";
import { IconStyle } from "./atoms.style";

function Icon({ name, className }) {
  return (
    <IconStyle className={className}>
      <img src={`${process.env.PUBLIC_URL}/icons/${name}.svg`} />
    </IconStyle>
  );
}

export default Icon;
