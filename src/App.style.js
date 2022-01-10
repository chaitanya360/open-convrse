import styled from "styled-components";

export const Appstyle = styled.section`
  background-color: #000000;
  /* background-image: linear-gradient(315deg, #485461 0%, #28313b 74%); */
  color: white;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;

  .body {
    /* space for sidebar */
    padding-left: 0px;
    /* padding-left: 100px; */
  }

  @media screen and (max-width: 640px) {
    .body {
      padding-left: 0px;
    }
  }
`;
