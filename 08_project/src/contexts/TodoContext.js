import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      msg: "todo msg",
      checked: false,
    },
  ],
  addTodo: (msg) => {},
  updateTodo: (id, msg) => {},
  deleteTodo: (id) => {},
  checkedTodo: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
