import React, { useState } from "react";
import ToDoItem from "./Todoitem";
import Logo from "../images/logo.svg";
import AddIcon from "../images/paper-plane-solid.svg";
import '../style/Todo.css';

const Todo = () => {
    
    const [ todolist, setTodolist] = useState([
        { id: 1, text: "clean the house" },
        { id: 2, text: "buy milk" },
    ]);
    const [toDo, setToDo] = useState("");
    const [showError, setshowError] = useState(false);

    const deleteItem = (id) => {
        setTodolist( todolist.filter((item) => item.id !== id ) );
    }

    const generateId = () => {
        if (todolist && todolist.length) {
          return Math.max(...todolist.map((t) => t.id)) + 1;
        } else {
          return 1;
        }
    };

    const displayError = () => {
        setshowError(true);
        const clearTimer = setTimeout(() => setshowError(false), 3000);
        return () => clearTimeout(clearTimer);
    }

    const createNewToDoItem = () => {
        if(toDo){
            const newId = generateId;
            const newToDo = { id: newId, text: toDo };
            setTodolist([...todolist, newToDo]);
            setToDo("")
        }else{
            displayError();
        }
    }


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            createNewToDoItem();
        }
    }

    const handleInput = (e) => {
        setToDo(e.target.value);
      };

    return (
        <div className="ToDo">
            <img className="Logo" src={Logo} alt="React logo" />
            <h1 className="ToDo-Header">React To Do</h1>
            <div className="ToDo-Container">

                <div className="ToDo-Content">
                    {todolist.map((item) => {
                        return <ToDoItem key={item.id} item={item}  deleteItem={deleteItem} />;
                    })}
                </div>

                    <div className="ToDoInput">
                        <input
                            type="text"
                            placeholder="I need to..."
                            value={toDo}
                            onChange={handleInput}
                            onKeyPress={handleKeyPress}
                            />
                        <button type="submit" className="ToDo-Add" onClick={createNewToDoItem}>
                            <img className="add-item" width="25" height="25" src={AddIcon} alt="React logo" />
                        </button>
                    </div>
                
                <div className="ToDo-ErrorContainer">{showError && <p>Please enter a todo!</p>}</div>
            </div>
        </div>
    );
};

export default Todo;