import React, { useState, useEffect } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';
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
    }, [toDos])

    const submitToDo = async (e) => {
        e.preventDefault()
        let response = await createToDo(id, newToDo)
        console.log(response)
        setToDo([...toDo, response])
        setNewToDo({name: ''})

    }
    const editButton = (toDoId) => {
        setOpenEdits(prevState => ({
            ...prevState, 
            [toDoId] : true 
        }))
       
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
    
    const updateToDos = (updatedToDo) => {
        let toDoArray = toDo
        let newToDoArray = toDoArray.map(t => {
            if (t.id === updatedToDo.id) {
                return updatedToDo
            } else {
                return t
            }
        })
     setToDo(newToDoArray)  
    }

    
    return (
        <div className="to-do-list">
            <h4>To Do List</h4>

            {toDo.map(toDo => <div key={`toDo-${toDo.id}`}> 
            <ToDoItem 
            name={toDo.name}
            updateToDos={updateToDos} 
            setOpenEdits={setOpenEdits} 
            roomId={id} 
            openEdit={openEdit} 
            id={toDo.id} 
            deleteButton={deleteButton} 
            editButton={editButton}
            />

        </div>
             ) }

            <form onSubmit={(e) => submitToDo(e)}>
                <input name='name'
                 value={newToDo.name} 
                 onChange={(e) => handleInput(e)} 
                 placeholder="Add Item"/>
                <button>+</button>
            </form>

        </div>
    )
}
