import React, { useEffect, useState } from "react";
// import FinalResult from "./components/FinalResult";

function UseEffect() {
  const [count, setCount] = useState(10);
  const [post, setPost] = useState(5);

  function handleGet() {
    setCount(count + 10);
  }
  function handleTwo() {
    setPost(post + 5);
  }

  const status = useEffect(() => {
    console.log("Render");
  }, [count]);

  return (
    <div>
      {/* <FinalResult /> */}
      <h1 className="text-2xl m-3 font-bold">{count}</h1>
      <button
        className="px-4 py-2 bg-gray-400 rounded-md m-3"
        onClick={handleGet}
      >
        Increment
      </button>
      <h1 className="text-2xl font-bold m-3">{post}</h1>
      <button
        className="px-4 py-2 bg-gray-400 rounded-md m-3"
        onClick={handleTwo}
      >
        Increment Two
      </button>
    </div>
  );
}

export default UseEffect;
