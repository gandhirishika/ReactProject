import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div>
      {item?.map((item) => {
        return (
          <div className="flex border border-black h-[20%] w-[20%]  ">
            <div key={item.index} className="">
              <h1>{item.name}</h1>
              <img className="h-[50%] w-[100%]" src={item.img} alt="loading" />
              <h1>${item.price}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItem;
