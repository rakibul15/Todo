import React from "react";
import { useSelector } from "react-redux";

const CounterComponents = () => {
  const counter = useSelector((state) => state.counter);

 
  return (
    <div>
      <div className="mt-5 text-center">
          <h2>
        {counter}
       
        </h2>
      </div>
    </div>
  );
};

export default CounterComponents;
