import { createContext, useState } from "react";

export const context = createContext();

export function ContextProvider({ children }) {
  const [count, setCount] = useState(10);

  return (
    <context.Provider value={{ count, setCount }}>{children}</context.Provider>
  );
}
