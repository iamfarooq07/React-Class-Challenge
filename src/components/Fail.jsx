// function Fail({ name = "Unkown", color = "red", marks }) {
//   return (
//     <div>
//       {marks === undefined ? (
//         <h1>Marks are not uploaded yet!</h1>
//       ) : (
//         <div>
//           <h1 style={{ color: color }}>Fail!</h1>
//           <p>
//             Mr/Mrs {name} your marks are {marks}{" "}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Fail;

function Fail({ name = "Unknown", color = "red", marks }) {
  return (
    <div className="border bg-gray-300 p-4 mx-5 mt-4 rounded">
      {marks === undefined ? (
        <h1 className="text-red-600 text-lg">Marks are not uploaded yet!</h1>
      ) : (
        <>
          <h1 className="text-xl font-semibold" style={{ color }}>
            Fail
          </h1>

          <p className="mt-2">
            Mr/Mrs <span className="font-medium">{name}</span>
          </p>

          <p>
            Marks: <span className="font-medium">{marks}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default Fail;
