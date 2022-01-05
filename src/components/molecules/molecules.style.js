import styled from "styled-components";

export const CardStyle = styled.div`
  box-shadow: 0px 0px 3px grey;
  margin: 1rem;
  padding: 1rem;
  /* padding-bottom: 0; */
  border-radius: 7px;
  background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.02) 50%,
      rgba(255, 255, 255, 0.02) 61%,
      rgba(0, 0, 0, 0.02) 73%
    ),
    linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  background-blend-mode: normal, color-burn;
  color: navy;
  cursor: pointer;

  /* :hover {
    box-shadow: 0px 0px 8px grey;
    transform: translateY(-5px);
  } */

  .model-viewer {
    width: 100%;
    height: 400px;
  }

  .card-title {
    font-size: 1.3rem;
    margin-left: 0;
  }

  .btn-primary {
    background-color: transparent;
    border: 2px solid navy;
    color: black;
  }

  .card-body {
    padding-bottom: 0;
  }
  .title {
    box-shadow: -2px 1px 1px rgba(0, 0, 0, 0.4);
    margin-left: -1rem;
    margin-top: -10px;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
    width: fit-content;
  }

  .price {
    padding: 1rem 0;
    font-weight: 700;
    display: flex;
    align-items: center;
    .etherium-icon {
      width: 20px;
      margin-right: 10px;
    }
  }

  button {
    margin: 0 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
  h5 {
    margin: 1rem;
  }
  p {
    color: black;
  }

  .btn-container {
    display: flex;
    background-color: #ffffff70;
    margin: 0 -2rem;
    padding: 0.5rem 0;
  }

  .you-own {
    display: inline-block;
    border: 1px solid green;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
    color: green;
    font-weight: 400;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    overflow: auto;
    .model-viewer {
      width: 100%;
      height: auto;
    }
  }
`;

export const HeaderStyle = styled.header`
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Orbitron", sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  padding: 0.5rem;

  @media screen and (max-width: 480px) {
    font-size: 1.7rem;
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
