// function Pass({ name = "Unkown", color = "green", marks }) {
//   return (
//     <div>
//       <h1 style={{ color: color }}>Pass!</h1>
//       <p>
//         Mr/Mrs {name} your marks are {marks}{" "}
//       </p>
//     </div>
//   );
// }

import { useContext } from "react";
import { context } from "../context/CounterContext";

// export default Pass;

function Pass({ name = "Unknown", color = "green", marks }) {
  const { count, setCount } = useContext(context);
  // console.log(data);

  return (
    <div className="border bg-gray-300 mx-5 p-4 mt-4 rounded">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 10)}>Clicked Me</button>
      <h1 className="text-xl font-semibold" style={{ color }}>
        Pass
      </h1>

      <p className="mt-2">
        Mr/Mrs <span className="font-medium">{name}</span>
      </p>

      <p>
        Marks: <span className="font-medium">{marks}</span>
      </p>
    </div>
  );
}

export default Pass;
