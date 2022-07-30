import React, { useState } from "react";
import logo from "./logo.JPG";
import Categories from "./Categories";
import items from "./shared/data";
import Menu from "./Menu";
import "./MainMenu.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const MainMenu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("");

  const filterItems = (c) => {
    setActiveCategory(c);
    if (c === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === c);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section" id="Menu">
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo"/> */}
          <h2 className="menu_title">Kai Menu List</h2>
          <div className="underline"> </div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default MainMenu;
