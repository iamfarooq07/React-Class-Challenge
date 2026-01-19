import { useContext, useState, useEffect } from "react";
import { context } from "./context/CounterContext";

function App() {
  const { todo, addTodo } = useContext(context);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState(todo);

  useEffect(() => {
    setFilteredTodos(todo);
  }, [todo]);

  const handleAddTodo = () => {
    if (title.trim() === "") return;
    addTodo(title, completed);
    setTitle("");
    setCompleted(false);
  };

  return (
    <div className="p-4">
      {/* Add Todo */}
      <div className="flex gap-2 mb-6 justify-center items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Todo Title"
          className="px-4 py-2 rounded-md border border-gray-300 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="w-5 h-5"
          />
          Completed
        </label>
        <button
          onClick={handleAddTodo}
          className="px-6 py-2 rounded-full bg-blue-400 text-white font-semibold shadow-lg hover:bg-blue-500 hover:scale-105 transition-transform duration-200"
        >
          Add Todo
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <button
          onClick={() =>
            setFilteredTodos(todo.filter((item) => item.completed))
          }
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-400 text-white font-semibold shadow-lg hover:bg-green-500 hover:scale-105 transition-transform duration-200"
        >
          Completed
        </button>
        <button
          onClick={() =>
            setFilteredTodos(todo.filter((item) => !item.completed))
          }
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-400 text-white font-semibold shadow-lg hover:bg-red-500 hover:scale-105 transition-transform duration-200"
        >
          Not Completed
        </button>
        <button
          onClick={() => setFilteredTodos(todo)}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-400 text-white font-semibold shadow-lg hover:bg-blue-500 hover:scale-105 transition-transform duration-200"
        >
          All
        </button>
      </div>

      {/* Todo Cards */}
      {filteredTodos.map((n) => (
        <div
          key={n.id}
          className={`p-4 rounded-lg shadow-md mb-4 flex justify-between items-center ${
            n.completed
              ? "bg-green-100 border-l-4 border-green-500"
              : "bg-red-100 border-l-4 border-red-500"
          }`}
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Title: {n.title}
            </h2>
            <p className="text-sm text-gray-600">
              Status:{" "}
              <span
                className={
                  n.completed
                    ? "text-green-700 font-bold"
                    : "text-red-700 font-bold"
                }
              >
                {n.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
