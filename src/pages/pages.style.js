import styled from "styled-components";

export const LandingPageStyle = styled.section`
  display: grid;
  padding: 4rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    grid-gap: 0rem;
`;

export const SingleAssetPageStyle = styled.section`
  min-height: 100vh;
  .container {
  }

  @media screen and (max-width: 480px) {
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;
