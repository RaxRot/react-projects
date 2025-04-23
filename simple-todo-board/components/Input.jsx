import {useState} from "react";

export default function Input(){
    const [input,setInput]=useState("");

    function handleAddTask(e){
        e.preventDefault();
    }
    return(
        <>
           <form>
               <input
                   type="text"
                   placeholder="Add a task"
                   value={input}
                   onChange={(e)=>setInput(e.target.value)}/>
               <button onClick={handleAddTask}>Add</button>
           </form>
        </>
    )
}