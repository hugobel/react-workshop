import React from "react";
import axios from "axios";
import Category from "../Category";
import "./App.scss";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState({});

  console.log(cartItems);

  const addToProduct = (productId) => {
    const currentQuantity = cartItems[productId] || 0;
    setCartItems({ ...cartItems, [productId]: currentQuantity + 1 });
  };

  const subtractFromProduct = (productId) => {
    const currentQuantity = cartItems[productId];
    setCartItems({ ...cartItems, [productId]: currentQuantity - 1 });
  };

  React.useEffect(() => {
    axios.get("http://localhost:3002/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = acc[category] || [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="App">
      {Object.entries(productsByCategory).map(([name, entries]) => {
        return (
          <Category
            key={name}
            name={name}
            entries={entries}
            cartItems={cartItems}
            addToProduct={addToProduct}
            subtractFromProduct={subtractFromProduct}
          />
        );
      })}
    </div>
  );
}

export default App;
