import React from "react";
import Card from "../components/Card";
import { LandingPageStyle } from "./pages.style";

function LandingPage(props) {
  return (
    <LandingPageStyle>
      <Card src="1" />
      <Card src="2" />
      <Card src="3" />
      <Card src="4" />
      <Card src="1" />
      <Card src="2" />
      <Card src="3" />
      <Card src="5" />
      <Card src="4" />
    </LandingPageStyle>
  );
}

export default LandingPage;
