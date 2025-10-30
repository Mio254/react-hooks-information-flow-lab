import ShoppingList from "./ShoppingList";
import React, { useState } from "react";

function Filter({ onCategoryChange, selectedCategory }) {
  const categories = ["All", "Produce", "Dairy", "Dessert"];

  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <label htmlFor="category">Filter by category:</label>
      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;