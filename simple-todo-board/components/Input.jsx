import './Input.css';
import { useState } from "react";

export default function Input({ taskList, setTaskList }) {
    const [input, setInput] = useState("");

    function handleAddTask(e) {
        e.preventDefault();
        if (input.trim() === "") return;
        setTaskList([...taskList, input]);
        setInput("");
    }

    return (
        <form onSubmit={handleAddTask}>
            <input
                type="text"
                placeholder="Add a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}
