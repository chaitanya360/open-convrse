import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./molecules.style";

function AssetCard({ url, id, cost }) {
  return (
    <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <CardStyle>
        <img src={url} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Asset {id}</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            labore corporis suscipit quidem?
          </p>
          <button href="#" className="btn btn-primary">
            View
          </button>
        </div>
      </CardStyle>
    </Link>
  );
}

export default AssetCard;
