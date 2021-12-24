import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "./molecules/molecules.style";

function Card({ src }) {
  return (
    <Link
      to={`/item/${src}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <CardStyle>
        <img
          src={`${process.env.PUBLIC_URL}/asset${src}.png`}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">Asset {src}</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            labore corporis suscipit quidem?
          </p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </CardStyle>
    </Link>
  );
}

export default Card;
