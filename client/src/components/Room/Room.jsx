import React from 'react'
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';
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
                <h1>Room Name Passed in Here</h1>
                <HomeButton />
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
