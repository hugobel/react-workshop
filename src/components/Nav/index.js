import React from "react";
import classnames from "classnames";
import { ReactComponent as HomeButton } from "../../assets/logo.svg";
import { ReactComponent as CartButton } from "../../assets/basket.svg";
import { ReactComponent as SearchButton } from "../../assets/search.svg";
import "./Nav.scss";

function Nav(props) {
  const { onSelect, children, isExpanded } = props;

  const wrapperClassName = classnames("header", {
    "-expanded": isExpanded,
  });

  return (
    <header className={wrapperClassName}>
      <HomeButton onClick={() => onSelect("menu")} />
      <SearchButton onClick={() => onSelect("search")} />
      <CartButton onClick={() => onSelect("cart")} />
      {children}
    </header>
  );
}

export default Nav;
