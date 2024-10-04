import React from "react";
import productImg from "../assets/images/product.jpeg";

const Card = ({
  product: { title = "card title", dec = "card dec", image = productImg },
}) => {
  return (
    <div className="p-6 border border-grayBorder rounded-md">
      <img className="w-full" src={image} alt="product image" />
      <h3 className="py-4">{title}</h3>
      <p>{dec}.</p>
    </div>
  );
};

export default Card;
