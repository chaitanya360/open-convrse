import React from "react";
import { LoadingStyle } from "./atoms.style";

function Loading(props) {
  return (
    <LoadingStyle>
      <div className="lds-dual-ring"></div>
    </LoadingStyle>
  );
}

export default Loading;
