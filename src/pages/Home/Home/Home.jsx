import { useEffect, useState } from "react";
import CollegesCard from "./CollegesCard";

const Home = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("/public/colleges.json")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return (
    <div>
      <div className="w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search Your College"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <div>
        <p className="text-center">--------------------------------</p>
        <h2 className="text-center text-3xl font-bold text-orange-600 my-5">
          Our All Colleges
        </h2>
        <p className="text-center">--------------------------------</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-7">
          {colleges.map((colleges) => (
            <CollegesCard
              key={colleges.id}
              colleges={colleges}
            ></CollegesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
