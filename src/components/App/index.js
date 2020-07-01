import React from "react";
import axios from "axios";
import Accordion from "../Accordion";
import Cart from "../Cart";
import Loading from "../Loading";
import Nav from "../Nav";
import "./App.scss";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartItems, setCartItems] = React.useState({});
  const [error, setError] = React.useState(null);
  const [activePanel, setActivePanel] = React.useState("menu");

  const addToProduct = (productId) => {
    const currentQuantity = cartItems[productId] || 0;
    setCartItems({ ...cartItems, [productId]: currentQuantity + 1 });
  };

  const subtractFromProduct = (productId) => {
    const currentQuantity = cartItems[productId];
    setCartItems({ ...cartItems, [productId]: currentQuantity - 1 });
  };

  const handleNav = (panel) => {
    setActivePanel(panel);
  };

  React.useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => {
        setError("API Call failed");
      });
  }, []);

  const productsByCategory = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = acc[category] || [];
    acc[category].push(product);
    return acc;
  }, {});

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <Nav onSelect={handleNav} />
      {activePanel === "cart" && (
        <Cart items={cartItems} directory={products} />
      )}
      {activePanel === "menu" && (
        <Accordion
          products={productsByCategory}
          cartItems={cartItems}
          addToProduct={addToProduct}
          subtractFromProduct={subtractFromProduct}
        />
      )}
    </div>
  );
}

export default App;
