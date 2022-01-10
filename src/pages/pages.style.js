import styled from "styled-components";

export const LandingPageStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  justify-content: space-around;
  padding-top: 1rem;
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
