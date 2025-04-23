import './Board.css';

export default function Board({ task, index, taskList, setTaskList }) {
    function handleDelete() {
        const newList = taskList.filter((_, i) => i !== index);
        setTaskList(newList);
    }

    return (
        <div className="task-item">
            <li>{task}</li>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
