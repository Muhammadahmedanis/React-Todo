import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoItem({ todo }) {
    const { updateTodo, deleteTodo, toggleComplete} = useTodo()
    const[isTodoEditable, setIsTodoEditable] = useState(false)
    const[todoMsg, setTodoMsg] = useState(todo.todo);

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
                className="cursor-pointer"
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                readOnly={!isTodoEditable}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            {/* Edit, Save Button */}
            <button
            onClick={() => {
                if(isTodoEditable){
                    editTodo();
                } else {
                    setIsTodoEditable((prev) => (!prev))
                }
            }}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
            onClick={() => deleteTodo(todo.id)}
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
