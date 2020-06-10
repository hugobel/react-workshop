import React from "react";
import "./Product.scss";

function Product(props) {
  const {
    id,
    name,
    price,
    orderLimit,
    addToProduct,
    subtractFromProduct,
    quantity,
  } = props;

  const subtractOne = () => {
    if (quantity < 1) return;
    subtractFromProduct(id);
  };

  const addOne = () => {
    addToProduct(id);
  };

  return (
    <p className="product">
      {name} - ${(price / 100).toFixed(2)}
      <span className="controls">
        <button disabled={quantity < 1} onClick={subtractOne}>
          -
        </button>
        {quantity}
        <button disabled={quantity >= orderLimit} onClick={addOne}>
          +
        </button>
      </span>
    </p>
  );
}

Product.defaultProps = {
  orderLimit: Infinity,
};

export default Product;
