import "./TodoInput.css";
import {useState} from "react";
import{PlusIcon} from "@heroicons/react/outline";
import {v4} from "uuid";

function TodoInput({todos, setTodos}){

    const [todo, setTodo] = useState("");

    const handleClick = () => {
        if(todo.length > 0){
            const newTodo = {
                id: v4(),
                name: todo,
                isCompleted: false,
            };
            const newTodos = [...todos, newTodo];
            setTodos(newTodos);
            setTodo("");
        }
    };

    return(
        <div className="todo-input-wrapper">
            <input
                type="text" 
                value={todo}
                onChange={(event) => {
                    setTodo(event.target.value);
                }}
                placeholder="Enter your todo.."
            />
            <button onClick={handleClick}>
                <PlusIcon className="plus-icon"/>
            </button>
        </div>
    );
}

export default TodoInput;