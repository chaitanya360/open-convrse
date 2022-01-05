import styled from "styled-components";

export const WalletAddressStyle = styled.div`
  padding: 0.5rem 1rem;
  background-color: #5555554d;
  font-size: 1rem;
  color: #ccc2b1;
  .address {
    color: #945afa;
  }
`;

export const LoadingStyle = styled.div`
  width: 100%;
  display: flex;
  padding: 5rem;
  flex: 1;
  .lds-dual-ring {
    margin: auto;
    display: block;
    width: 320px;
    height: 320px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 256px;
    height: 256px;
    margin: 24px;
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
