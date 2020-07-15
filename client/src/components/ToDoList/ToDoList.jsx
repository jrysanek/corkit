import React, { useState, useEffect } from 'react';
import './ToDoList.css';


export default function ToDoList({toDos}) {
    const [newToDo, setNewToDo] = useState({name:''})
    const [toDo, setToDo] = useState([])

    useEffect(() => {
        setToDo(toDos)
    },[toDos])

    const submitToDo = (e) => {
        e.preventDefault()
        setToDo([...toDo,newToDo])
    }  
    const handleInput = (e) => {
        let {name, value} = e.target 
        setNewToDo((prevState) => ({
            ...prevState,
            [name]:value
        
        })
         )
    }
    
    return (
        <div className="to-do-list"> 
            <h4>To Do List</h4>    
            {toDo.map(toDo => <p>{toDo.name}</p>)}
            <form onSubmit={(e) => submitToDo(e)}>
                <input name='name' value={newToDo.name} onChange={(e) => handleInput(e)}placeholder="Add Item"></input>
                <button>+</button>
            </form>
            <button>-</button>  
        </div>
    )
}
