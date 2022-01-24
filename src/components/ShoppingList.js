import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, select] = useState("All");

  function handleCategory(e) {
    select(e.target.value);
  }

  const displayedFood = items.filter((food) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return food.category === selectedCategory;
    }
  });


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedFood.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
