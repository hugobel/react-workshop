import React from "react";
import { ReactComponent as HomeButton } from "../../assets/logo.svg";
import { ReactComponent as CartButton } from "../../assets/basket.svg";
import { ReactComponent as SearchButton } from "../../assets/search.svg";
import "./Nav.scss";

function Nav(props) {
  const { onSelect } = props;

  return (
    <header className="header">
      <HomeButton onClick={() => onSelect("menu")} />
      <SearchButton onClick={() => onSelect("search")} />
      <CartButton onClick={() => onSelect("cart")} />
    </header>
  );
}

export default Nav;
