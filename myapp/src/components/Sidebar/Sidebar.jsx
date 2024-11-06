import React, { useState } from "react";
import "./Sdiebar.css";

const Sidebar = ({ onCategorySelect }) => {
  // the state in Sidebar is only used to control the local UI (highlighting the selected category), you can give it a more descriptive name like activeCategory or highlightedCategory.
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Culture", "Creativity", "Food", "Travel", "Humour", "Music"];

  // Handle category click to filter blogs
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category); // Notify the main component about the category change
    //category argument
    //It updates the selectedCategory state and calls onCategorySelect to notify the parent component (BlogPage) about the category change.
  };
  /*Example with Two Categories:
Let's say activeCategory is "Travel" and the categories are "Travel" and "Food":

When rendering the "Travel" item, activeCategory === "Travel" will be true, so it will be styled with "gray".
When rendering the "Food" item, activeCategory === "Food" will be false, so it will be styled with "black".
*/
  return (
    <div className="sidebar">
      <div className="main-left">
        <div className="main-left-category">
          <h1>Categories</h1>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  cursor: "pointer",

                  color: activeCategory === category ? "gray" : "black",
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
