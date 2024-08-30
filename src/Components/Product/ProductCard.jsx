import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";

function ProductCard({ product }) {
  return (
    <div className={classes.ProductCard}>
      <div>
        <a href="/">
          <img src={product.image} alt={product.title} />
        </a>
      </div>
      <div>
        <h3>title</h3>
        <div>
          <Rating value={5} precision={0.1} />{" "}
              </div>
              <div>Price</div>
      </div>
    </div>
  );
}

export default ProductCard;
