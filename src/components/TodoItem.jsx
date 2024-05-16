import { useDispatch, useSelector } from "react-redux";
import { editItem, removeItem } from "../redux/todolist/todoListSlice";
import { useState } from "react";

import "../styles/TodoItem.css";

const TodoItem = ({item}) => {
    const todolist = useSelector((state) => state.todolist.value);
    const dispatch = useDispatch();

    const [isEditing, setisEditing] = useState(0);
    const [editedTask, setEditedTask] = useState('');

    const handleTaskClick = (id) => {
        dispatch(removeItem(id));
    }

    const handleTaskEdit = (id) => {
        if(isEditing === 0) 
            setisEditing(id);
    } 

    const handleEditFormSubmit = (e, id) => {
        e.preventDefault();

        setisEditing(0);
        setEditedTask('');
        dispatch(editItem({id, editedTask}));
    }

    return (
        <div key={item.id} className="todoitem">
            {isEditing > 0 && isEditing === item.id ? 
                <form type="submit" onSubmit={(e) => handleEditFormSubmit(e, item.id)} className="todoitem__edit-form">
                    <input className="todoitem__edit-input" type="text" required value={editedTask} onChange={(e) => setEditedTask(e.target.value)} placeholder="Enter your new task here" />
                </form>
                :
                <div onClick={() => handleTaskClick(item.id)} className="todoitem__text">
                    {item.id > 0 ? `#${todolist.indexOf(item) + 1}  `: ''}
                    {item.item}
                </div>
            }
            <div className="todoitem__edit">
                {item.id > 0 && <button onClick={() => handleTaskEdit(item.id)} className="todoitem__edit-btn">Edit</button>}
            </div>
        </div>
    );
}

export default TodoItem;