import React from "react";
import Result from "./Result";

function Results({ students }) {
  return (
    <div>
      {students.map((n, i) => {
        return (
          <div key={i}>
            <Result name={n.name} marks={n.marks} color={n.color} />
          </div>
        );
      })}
    </div>
  );
}

export default Results;
