import TodoItem from "./TodoItem";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/counter/counterSlice";
import { addItem } from "../redux/todolist/todoListSlice";
import { useState } from "react";

import "../styles/TodoList.css";

const TodoList = () => {

    let count = useSelector((state) => state.counter.value);
    const todolist = useSelector((state) => state.todolist.value);
    const dispatch = useDispatch();

    const [task, setTask] = useState('');


    const handleAddSubmit = (e) => {
        e.preventDefault();
        let newItem = {
            'id': count + 1,
            'item': task,
        }
        
        dispatch(increment());
        dispatch(addItem(newItem));
        setTask('');
    }

    return (
        <div className="todolist">
            <div className="todolist__add">
                <form action="submit" onSubmit={handleAddSubmit} className="todolist__add-form">
                    <input placeholder='Add new task' value={task} onChange={(e) => setTask(e.target.value)} className="todolist__add-input" label='task' type="text" required/>
                    <button type="submit" className="todolist__add-btn">Add</button>
                </form>
            </div>
            <div className="todolist__list">
                {todolist.length > 0 && todolist.map((item) => (
                    <TodoItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;