import React from "react";
import "../style/Todoitem.css";
import DeleteIcon from "../images/trash-alt-solid.svg";

const ToDoItem = (props) => {
    const { item, deleteItem } = props;
    return (
        <div className="ToDoItem">
            <p className="ToDoItem-Text">{item.text}</p>
            <button className="ToDoItem-Delete" onClick={() => deleteItem(item.id)}>
                <img className="delete-icon" width="20" height="20" src={DeleteIcon} alt="React logo" />
            </button>
        </div>
    );
};

export default ToDoItem;