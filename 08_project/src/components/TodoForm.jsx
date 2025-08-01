import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [msg,setMsg]=useState("")
    const {addTodo}=useTodo()
    const add=(e)=>{
       e.preventDefault()
       if(!msg) return ;
       addTodo({msg,checked:false})
       setMsg("")
    }
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
