import React from "react";
import "./Product.css";

function Product(props) {
  const [quantity, setQuantity] = React.useState(0);

  const subtractOne = () => {
    if (quantity < 1) return;
    setQuantity(quantity - 1);
  };

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  return (
    <p className="-product">
      {props.name} - ${(props.price / 100).toFixed(2)}
      <span className="-controls">
        <button disabled={quantity < 1} onClick={subtractOne}>
          -
        </button>
        {quantity}
        <button onClick={addOne}>+</button>
      </span>
    </p>
  );
}

export default Product;
