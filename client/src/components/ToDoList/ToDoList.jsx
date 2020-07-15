import React from 'react';
import './ToDoList.css';

export default function ToDoList() {
    return (
        <div className="to-do-list"> 
            <h4>To Do List</h4>    
            <input placeholder="Add Item"></input>
            <p>+</p>
            <p>-</p>  
        </div>
    )
}
