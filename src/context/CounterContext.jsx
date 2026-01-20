import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const context = createContext();

export function ContextProvider({ children }) {
  const [todo, setTodo] = useState([]);
  const url = "http://localhost:3000/data";

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(url);
        setTodo(res.data);
      } catch (err) {
        console.error("Failed to fetch todos:", err);
      }
    };
    fetchTodos();
  }, [url]);

  // const addTodo = async (title, completed = false) => {
  //   try {
  //     const res = await axios.post(url, {
  //       title,
  //       completed,
  //     });

  //     const newTodo = {
  //       ...res.data,
  //       completed, // user ka value enforce
  //     };

  //     setTodo((prev) => [...prev, newTodo]);
  //   } catch (err) {
  //     console.error("Failed to add todo:", err);
  //   }
  // };

  const addTodo = async (title, completed = false) => {
    try {
      const res = await axios.post(url, {
        title,
        completed: false,
      });
      const newTodo = {
        ...res.data,
        completed,
      };
      setTodo((prev) => [...prev, newTodo]);
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  return (
    <context.Provider value={{ todo, setTodo, addTodo }}>
      {children}
    </context.Provider>
  );
}
