import React from "react";
import { toCurrency } from "../../utils/number";

function Cart(props) {
  const { items, directory } = props;

  const filteredEntries = Object.entries(items)
    .filter(([id, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const namedProduct = directory.find((product) => product.id === id);
      return { ...namedProduct, quantity };
    });

  return (
    <div>
      {filteredEntries.map((entry) => {
        const { id, name, price, quantity } = entry;
        return (
          <p key={id}>
            {quantity} {name} - {toCurrency(price * quantity)}
          </p>
        );
      })}
    </div>
  );
}

export default Cart;
