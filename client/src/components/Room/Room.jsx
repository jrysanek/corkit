import React from 'react'
import ShoppingList from '../ShoppingList/ShoppingList';
import ToDoList from '../ToDoList/ToDoList';
import Swatches from '../Swatches/Swatches';
import Notes from '../Notes/Notes';
import Photos from '../Photos/Photos';
import './Room.css';

export default function Room() {
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
                    <ToDoList />
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
