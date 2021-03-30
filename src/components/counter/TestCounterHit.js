import React, { useState } from "react";
import { useDispatch} from "react-redux";

const TestCounterHit = () => {
//   const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [number, setnumber] = useState(0)

  return (
    <div>
      <div className="mt-5 text-center">
        <h2>
          <button
            className="btn btn-dark mr-4"
            onClick={() => dispatch({ type: "DEC" })}
          >
            Decrement
          </button>{" "}
         
          <button
            className="btn btn-dark ml-4"
            onClick={() => dispatch({ type: "INC" })}
          >
            Increment
          </button>
        </h2>


        <h2>
        <input type="number" value={number} onChange={(e)=>setnumber(e.target.value)} />
          <button
            className="btn btn-dark ml-4"
            onClick={() => dispatch({ type: "UPDATE", payload: number })}
          >
            Update
          </button>
        </h2>



      </div>
    </div>
  );
};

export default TestCounterHit;
