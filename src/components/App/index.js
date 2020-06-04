import React from "react";
import axios from "axios";
import Product from "../Product";
import "./App.css";

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3002/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="App">
      {products.map((product) => {
        return (
          <Product key={product.id} name={product.name} price={product.price} />
        );
      })}
    </div>
  );
}

export default App;
