import React from "react";
import classnames from "classnames";
import Category from "../Category";
import "./Accordion.scss";

function Accordion(props) {
  const {
    activeTab,
    onTabSelect,
    products,
    cartItems,
    addToProduct,
    subtractFromProduct,
    isCollapsed,
  } = props;

  const wrapperClassName = classnames("accordion", {
    "-has-active-tab": activeTab && !isCollapsed,
    "-collapsed": isCollapsed,
  });

  return (
    <div className={wrapperClassName}>
      {Object.entries(products).map(([name, entries]) => {
        return (
          <Category
            key={name}
            name={name}
            entries={entries}
            cartItems={cartItems}
            addToProduct={addToProduct}
            subtractFromProduct={subtractFromProduct}
            isExpanded={!isCollapsed && activeTab === name}
            setActiveTab={onTabSelect}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
