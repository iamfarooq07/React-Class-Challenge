import React, { useState } from "react";
import Result from "./components/Result";
import Results from "./components/Results";

let students = [
  {
    name: "Ali",
    marks: 40,
    color: "red",
  },
  {
    name: "Ahemad",
    marks: 60,
    color: "blue",
  },
  {
    name: "Zubair",
    marks: 80,
    color: "green",
  },
  {
    name: "Usman",
    marks: 25,
    color: "blue",
  },
  {
    name: "Bilal",
    marks: 72,
    color: "purple",
  },
  {
    name: "Hassan",
    marks: 90,
    color: "orange",
  },
  {
    name: "Hamza",
    marks: 35,
    color: "red",
  },
  {
    name: "Fahad",
    marks: 65,
    color: "brown",
  },
];

function App() {
  const [student, setStudent] = useState(students);

  const onReset = () => {
    console.log("clicked me");

    setStudent(students);
  };

  const onPass = () => {
    let passData = students.filter((n) => n.marks > 50);
    setStudent(passData);
    console.log(passData);
  };
  const onFail = () => {
    let failData = students.filter((n) => n.marks < 50);
    setStudent(failData);
  };
  console.log(student);

  return (
    <>
      <div className="flex justify-between my-2 mx-5 p-4">
        <button onClick={onPass} className="bg-green-300 px-4 py-2 rounded-md">
          Pass Data
        </button>
        <button onClick={onFail} className="bg-red-300 px-4 py-2 rounded-md">
          Fail Data
        </button>
        <button onClick={onReset} className="bg-gray-300 px-4 py-2 rounded-md">
          Reset Data
        </button>
      </div>
      <Results students={student} />
    </>
  );
}

export default App;
