import styled from "styled-components";

export const WalletAddressStyle = styled.div`
  padding: 0.5rem 1rem;
  background-color: #5555554d;
  font-size: 1rem;
  color: wheat;
  .address {
    color: #945afa;
  }
`;

export const LoadingStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: auto;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
