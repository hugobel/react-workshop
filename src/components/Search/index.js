import React, { useEffect, useRef } from "react";
import Product from "../Product";
import "./Search.scss";

function Search(props) {
  const inputRef = useRef();
  const {
    value,
    onChange,
    results,
    addToProduct,
    subtractFromProduct,
    cartItems,
    navToCategory,
  } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="searchbox">
      <input
        ref={inputRef}
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      {results.length > 0 &&
        results.map((product) => {
          return (
            <Product
              key={product.id}
              {...product}
              addToProduct={addToProduct}
              subtractFromProduct={subtractFromProduct}
              quantity={cartItems[product.id] || 0}
              navToCategory={navToCategory}
            />
          );
        })}
    </div>
  );
}

export default Search;
