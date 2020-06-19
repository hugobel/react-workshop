import React from "react";

function Nav(props) {
  const { onSelect } = props;

  return (
    <>
      <button onClick={() => onSelect("menu")}>Menu</button>
      <button onClick={() => onSelect("cart")}>Cart</button>
    </>
  );
}

export default Nav;
