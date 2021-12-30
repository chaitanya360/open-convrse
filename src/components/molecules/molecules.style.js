import styled from "styled-components";

export const CardStyle = styled.div`
  max-width: 500px;
  box-shadow: 0px 0px 3px grey;
  margin: 1rem;
  padding: 1rem;
  border-radius: 7px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 8px grey;
    transform: translateY(-5px);
  }

  .model-viewer {
    width: 100%;
    height: 400px;
  }

  .card-title {
    font-size: 1.3rem;
    margin-left: 0;
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
  }
  h5 {
    margin: 1rem;
  }

  .you-own {
    display: block;
    background-color: green;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    border-radius: 8px;
    transform: translateY(10px);
  }
`;

export const HeaderStyle = styled.header`
  color: #1f5c98;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  padding: 0.5rem;
`;
