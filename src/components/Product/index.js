import React from "react";
import "./Product.scss";
import { toCurrency } from "../../utils/number";

function Product(props) {
  const {
    id,
    name,
    category,
    price,
    orderLimit,
    addToProduct,
    subtractFromProduct,
    quantity,
    navToCategory,
  } = props;

  const subtractOne = (event) => {
    event.stopPropagation();
    if (quantity < 1) return;
    subtractFromProduct(id);
  };

  const addOne = (event) => {
    event.stopPropagation();
    addToProduct(id);
  };

  const handleNameClick = (event) => {
    event.stopPropagation();
    navToCategory(category);
  };

  return (
    <p className="product">
      <span onClick={handleNameClick}>{name}</span> - {toCurrency(price)}
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
  navToCategory: () => {},
};

export default Product;
