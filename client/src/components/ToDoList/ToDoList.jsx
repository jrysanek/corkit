import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import { createToDo, deleteToDo } from '../../services/room';


export default function ToDoList({ toDos, id, name }) {
    const [newToDo, setNewToDo] = useState({ name: '' })
    const [toDo, setToDo] = useState([])
    const [openEdit, setOpenEdits] = useState({})

    useEffect(() => {

        let obj = {}
        toDo.forEach(t => {
            obj[t.id]= false 
        })
            setOpenEdits(obj)
    }, [toDo])

    useEffect(() => {
        setToDo(toDos)
        console.log(toDos, "here")
    }, [toDos])

    const submitToDo = async (e) => {
        e.preventDefault()
        let response = await createToDo(id, newToDo)
        console.log(response)
        setToDo([...toDo, response])
        setNewToDo({name: ''})

    }
    const editButton = (toDoId) => {
        // editToDo(id, toDoId)
        let openEdits = openEdit
        if(openEdits.hasOwnProperty(toDoId)) {
            openEdits[toDoId] = !openEdits[toDoId]
        }
        setOpenEdits(openEdits)
        // console.log(openEdit)
    }

    const deleteButton = (toDoId) => {
        deleteToDo(id, toDoId)
        let filteredToDo = toDo.filter(t =>{
            if (t.id !== toDoId) {
                return t
            }
        })
        setToDo(filteredToDo)
    }

    const handleInput = (e) => {
        let { name, value } = e.target
        setNewToDo((prevState) => ({
            ...prevState,
            [name]: value

        })
        )
    }

    
    return (
        <div className="to-do-list">
            <h4>To Do List</h4>
            {toDo.map(toDo => <> 
            {/* {console.log(openEdit[toDo.id])} */}
            {openEdit[toDo.id] == false ? <p>- {toDo.name}</p> : <input value={toDo.name}></input>}
             <button onClick={() => deleteButton(toDo.id)}>-</button>
             <button onClick={() => editButton(toDo.id)}>edit</button></>)}

            <form onSubmit={(e) => submitToDo(e)}>
                <input name='name' value={newToDo.name} onChange={(e) => handleInput(e)} placeholder="Add Item"></input>
                <button>+</button>
            </form>

        </div>
    )
}
