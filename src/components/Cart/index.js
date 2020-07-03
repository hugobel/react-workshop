import React from "react";
import { toCurrency } from "../../utils/number";
import "./Cart.scss";

function Cart(props) {
  const { items, directory, clearProduct, sendOrder } = props;

  const filteredEntries = Object.entries(items)
    .filter(([id, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const namedProduct = directory.find((product) => product.id === id);
      return { ...namedProduct, quantity };
    });

  const total = filteredEntries.reduce((aggr, item) => {
    return item.price * item.quantity + aggr;
  }, 0);

  return (
    <div className="cart">
      <div className="cart-items">
        {filteredEntries.map((entry) => {
          const { id, name, price, quantity } = entry;
          return (
            <p key={id} className="cart-item">
              <button
                className="remove-item-btn"
                onClick={() => clearProduct(id)}
              >
                x
              </button>
              {quantity} {name} - {toCurrency(price * quantity)}
            </p>
          );
        })}
      </div>
      <p className="cart-total">Total: {toCurrency(total)}</p>
      {total > 0 && (
        <button onClick={sendOrder} className="buy-btn">
          Buy!
        </button>
      )}
    </div>
  );
}

export default Cart;
