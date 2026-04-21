import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default ProductCard;