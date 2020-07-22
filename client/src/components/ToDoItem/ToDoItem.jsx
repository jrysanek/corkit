import React, { useState } from 'react';
import { editToDo } from '../../services/room';




export default function ToDoItem({ name, id, editButton, deleteButton, openEdit, roomId, setOpenEdits, updateToDos }) {
    const [input, setInput] = useState({name: name})

    const handleInputChange = (e) => {
        setInput({name: e.target.value})
    }
    const handleEditSubmit = async (e) => {
        e.preventDefault()
        let toDo = await editToDo(id, input, roomId)
        setOpenEdits(prevState => ({
            ...prevState, 
            [id]: false

        }))
        updateToDos(toDo)
    }


    if (openEdit[id] == true) {
        return <form className="to-to-item-form" onSubmit={handleEditSubmit}>
                    <input value={input.name} onChange={handleInputChange} />
                    <button>ok</button>
                </form>
    }

    return (
        <div>
            {name}
             <button onClick={() => deleteButton(id)}>-</button>
             <button onClick={() => editButton(id)}>edit</button>
        </div>
    )
}
