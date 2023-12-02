import React, { useEffect, useState } from "react";
const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const fetchJob = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setJobs(json);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    fetchJob();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  const { title, dates, company, duties } = jobs[value];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold flex justify-center items-center m-10 p-10">
        Experience
      </h1>
      <div className="flex flex-row justify-center items-center h-[50%] w-[50%] gap-10 ">
        {jobs.map((item, index) => {
          return (
            <div className="border border-red-500 gap-y-10  mt-10  flex  ">
              <button
                className="font-bold text-2xl text-green-800"
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
              {/* <h1 className="font-semibold text-xl">{item.dates}</h1> */}
              {/* <p>{item.duties}</p> */}
            </div>
          );
        })}
        <div>
          <h1 className="font-semibold text-xl">{company}</h1>
          <h1 className="font-semibold text-xl">{title}</h1>
          <h1 className="font-semibold text-xl">{dates}</h1>
          <p>{duties}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
