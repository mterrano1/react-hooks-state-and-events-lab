import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  function handleClick() {
    setCart((inCart) => !inCart)
  }

  const cartClass = inCart ? "in-cart" : ""

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={cartClass ? "remove" : "add"}>{cartClass ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
