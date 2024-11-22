import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todo: [
        {
            id: 1,
            todo: "How",
            completed: true,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}