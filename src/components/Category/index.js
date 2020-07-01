import React from "react";
import Product from "../Product";
import "./Category.scss";

function Category(props) {
  const {
    name,
    entries,
    addToProduct,
    subtractFromProduct,
    cartItems,
    isExpanded,
    setActiveTab,
  } = props;

  const sortedEntries = entries.sort(
    (prodA, prodB) => prodA.price - prodB.price
  );

  if (!isExpanded) {
    return (
      <div className="category" onClick={() => setActiveTab(name)}>
        <h2>{name}</h2>
      </div>
    );
  }

  return (
    <div className="category -expanded" onClick={() => setActiveTab(null)}>
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
