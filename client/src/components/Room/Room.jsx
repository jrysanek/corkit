import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingList from '../ShoppingList/ShoppingList';
import ToDoList from '../ToDoList/ToDoList';
import Swatches from '../Swatches/Swatches';
import Notes from '../Notes/Notes';
import Photos from '../Photos/Photos';
import { getToDoList } from '../../services/room';
import './Room.css';
import SignOut from '../SignOut/SignOut'

export default function Room(props) {
    console.log(props)
    const id = props.params.match.params.id
    const name = props.params.location.state.name

    const [toDos, setToDos] = useState([])

    useEffect(() => {
        fetchToDos()
    }, [])

    const fetchToDos = async () => {
        let toDosData = await getToDoList(id)
        setToDos(toDosData)
    }

    
    return (
        <div className="room-main">
            <div className="room-nav">
                <h1>Cork It</h1>
                <h2>{name}</h2>

                <span>
                    <Link to='/landing'>
                        <button>Dashboard</button>
                    </Link>

                    <SignOut/>
                </span>
            </div>

            <div className="room-container">
                <div className="room-components-a">
                    <ShoppingList />
                    <ToDoList toDos={toDos} id={id} />
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
