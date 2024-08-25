import React from "react";
import classes from './Catagory.module.css'

function CategoryCard({ data }) {
  return (
    <div className= {classes.Categorycard}>
      <a href="/">
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p style={{ color: "black" }}>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
