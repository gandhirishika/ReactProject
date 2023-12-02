import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div>
      {categories.map((category, id) => {
        return (
          <>
            {" "}
            <button
              className="p-3 m-3 border border-black rounded-lg bg-gray-600"
              key={id}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
