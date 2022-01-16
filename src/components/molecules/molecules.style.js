import styled from "styled-components";

export const CardStyle = styled.div`
  /* width: 380px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #121212;
  mix-blend-mode: normal;
  height: fit-content;

  box-sizing: border-box;
  border-radius: 12px;

  .iframe-wrapper {
    border-radius: 12px;
    width: 100%;
    height: 417px;
    iframe {
      border-radius: 12px 12px 0 0;
      width: 100%;
      height: 100%;

      .viewer .watermark a {
        display: none !important;
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border: 2.71499px solid #312f62;
    border-top: none;
    border-radius: 0 0 12px 12px;
    height: fit-content;
    .top {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 1rem 0;

      .title {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 25.453px;
        line-height: 38px;
        opacity: 0.95;
        /* identical to box height */
      }

      .buy-btn {
        cursor: pointer;
        font-weight: bold;
        font-size: 13px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #c85151;
        /* background: linear-gradient(90deg, #fdfc47 0%, #24fe41 100%); */
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid #f84060;
        border-radius: 8.1812px;
        padding: 0.3rem 1rem;

        :hover {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    }
    .desc {
      font-weight: 500;
      font-size: 15.2356px;
      line-height: 20px;
      letter-spacing: 0.773771px;

      color: #ffffff;

      opacity: 0.8;
    }

    .view-btn {
      /* Auto layout */

      width: 100%;
      margin: 2rem 0;
      padding: 18px 98px 19px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      opacity: 0.9;

      background: linear-gradient(
        92.23deg,
        #ff56f6 21.43%,
        #b936ee 50.63%,
        #3bace2 100%,
        #406aff 117.04%
      );
      box-shadow: 0px 4.07248px 98.7576px rgba(62, 8, 95, 0.51);
      backdrop-filter: blur(195.479px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 15px;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      /* identical to box height */
      color: #ffffff;

      :hover {
        opacity: 1;
      }
    }

    .owner {
      letter-spacing: 0.7px;
      display: flex;
      justify-content: space-between;
      .title {
        font-weight: bold;
        font-size: 13.2356px;
        line-height: 16px;
        /* identical to box height */

        color: #ffffff;
      }
      .value {
        font-size: 13.2356px;
        line-height: 16px;
        color: #ffffff;
        opacity: 0.7;
        margin-left: 1rem;
      }
    }
  }

  @media screen and (max-width: 980px) {
    margin: 2rem 0;
  }
`;

export const HeaderStyle = styled.header`
  background-color: black;
  z-index: 100;
  position: sticky;
  top: 0;
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  padding: 0.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    height: 100%;
    align-items: center;
    .logo-wrapper {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      img {
        height: 28.44px;
        width: 54.3px;
      }
    }

    .title {
      margin: 0 1rem;
      width: fit-content;
      background: linear-gradient(90deg, #7f00ff 0%, #e100ff 100%);
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .desc {
      max-width: 700px;
      opacity: 0.7;
      font-weight: normal;
      font-size: 12.168px;
      line-height: 14px;
      letter-spacing: 0.71136px;
      border-left: 1px solid #7c7c7c;
      padding: 0 1rem;
    }
  }

  @media screen and (max-width: 640px) {
    font-size: 1.7rem;
    .desc {
      display: none;
    }
  }
`;

export const ConnectWalletStyle = styled.aside`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;

  .panel {
    border-radius: 3px;
    background-color: white;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);
    overflow: hidden;
    transition: all 400ms linear;
    position: absolute;
    top: 2rem;
    right: 0px;
    display: flex;
    flex-direction: column;
    color: black;

    .title {
      padding: 1rem;
    }
    .card {
      color: black;
      text-decoration: none;
      margin: 1rem 0;
      padding: 1rem;
      display: flex;
      flex-direction: row;
      font-size: 1.3rem;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      cursor: pointer;
      align-items: center;
      transform: scale(1);
      img {
        width: 40px;
        height: auto;
        margin-right: 1rem;
      }
      :hover {
        box-shadow: 1px 1px 2px rgba(0, 0, 255, 0.8);
        transition: all 200ms;
        transform: scale(1.03);
      }
    }
  }
`;

export const SidebarStyle = styled.aside`
  display: none;
  /* display: flex; */
  @media screen and (max-width: 640px) {
    display: none;
  }
  padding: 1.1rem;
  height: 100vh;
  width: 100px;
  background-color: #261e35;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .selected-icon {
    background-color: #372c44;
    border-radius: 13px;
    :hover {
      transform: scale(1);
    }
  }
`;
