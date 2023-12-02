import React, { useEffect, useState } from "react";
import { people } from "../../utils/constant";
const Slider = () => {


  const [peoples, setPeoples] = useState(people);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = peoples.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [peoples, index]);


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

 console.log(index);

  return (
    <div >
      <h1 className="text-5xl font-extrabold">Reviews</h1>
      <div className="flex" >
        {peoples.map((item, personindex) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (personindex === index) {
            position = "activeSlide";
          }
          if (
            personindex === index - 1 ||
            (index === 0 && personindex === peoples.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <div>
              <h1 className="text-xl font-bold" key={id}>{name}</h1>
              <img
                className="rounded-full h-[40%] w-[30%]"
                src={image}
                alt="loading"
              />

              <h1>{title}</h1>
              <p>{quote}</p>
            </div>
          );
        })}
      </div>
      <button onClick={()=>setIndex(index-1)}>Prev</button>
      <button onClick={()=>setIndex(index+1)}>Next</button>
    </div>
  );
};

export default Slider;
