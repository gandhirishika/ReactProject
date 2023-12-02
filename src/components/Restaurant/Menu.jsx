import React, { useState } from "react";
import { data } from "../../utils/constant";
import MenuItem from "../MenuItem";
import Categories from "../Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const Menu = () => {
  const [items, setItems] = useState(data);

  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
      console.log(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);console.log(newItems);
  };

  return (
    <div className="h-[100%] w-[100%]  flex flex-col justify-center items-center  gap-10">
      <h1 className="text-5xl font-bold ">Restaurant Menu</h1>
      <div className=" h-[70%]  w-[50%] flex flex-row  justify-center items-center gap-x-10 border border-black  ">
        {
          <>
            <Categories categories={categories} filterItems={filterItems} />
            <MenuItem item={items} />
          </>
        }
      </div>
    </div>
  );
};

export default Menu;
