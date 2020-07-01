import React from "react";
import Category from "../Category";
import "./Accordion.scss";

function Accordion(props) {
  const [activeTab, setActiveTab] = React.useState(null);
  const { products, cartItems, addToProduct, subtractFromProduct } = props;

  return (
    <div className={`accordion ${activeTab ? "-has-active-tab" : ""}`}>
      {Object.entries(products).map(([name, entries]) => {
        return (
          <Category
            key={name}
            name={name}
            entries={entries}
            cartItems={cartItems}
            addToProduct={addToProduct}
            subtractFromProduct={subtractFromProduct}
            isExpanded={activeTab === name}
            setActiveTab={setActiveTab}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
