import React from "react";
import Product from "../Product";

function Category(props) {
  const { name, entries, addToProduct, subtractFromProduct, cartItems } = props;

  const sortedEntries = entries.sort(
    (prodA, prodB) => prodA.price - prodB.price
  );

  return (
    <div>
      <h2>{name}</h2>
      {sortedEntries.map((product) => {
        return (
          <Product
            key={product.id}
            {...product}
            addToProduct={addToProduct}
            subtractFromProduct={subtractFromProduct}
            quantity={cartItems[product.id] || 0}
          />
        );
      })}
    </div>
  );
}

export default Category;
