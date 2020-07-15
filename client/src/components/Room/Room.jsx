import React, { useState, useEffect } from 'react'
import ShoppingList from '../ShoppingList/ShoppingList';
import ToDoList from '../ToDoList/ToDoList';
import Swatches from '../Swatches/Swatches';
import Notes from '../Notes/Notes';
import Photos from '../Photos/Photos';
import { getToDoList } from '../../services/room';
import './Room.css';

export default function Room(props) {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        fetch()
    },[])

    const fetch = async () => {
        let id = props.params.match.params.id 
        let toDosData = await getToDoList(id) 
        setToDos(toDosData)
    }

    console.log(props)
    return (
        <div >
            <div className="room-nav">
                <h1>Cork It</h1>
                <h2>Room Name Passed in Here</h2>
                <button>Dashboard</button>
                <button>Sign Out</button>
            </div>
            <div className="room-container">
                <div className="room-components-a">
                    <ShoppingList />
                    <ToDoList toDos={toDos}/>
                    <Notes />
                </div>

                <div className="room-components-b">
                    <Swatches />
                    <Photos />
                </div>
            </div>
        </div>
    )
}
