import React from "react";
import "./Search.scss";

function Search(props) {
  const { value, onChange, results } = props;

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="searchbox">
      <input
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      {results.length > 0 &&
        results.map((product) => {
          return <p key={product.id}>{product.name}</p>;
        })}
    </div>
  );
}

export default Search;
