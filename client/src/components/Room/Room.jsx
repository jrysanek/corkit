import React from 'react'
import Header from '../../shared/Header';
import HomeButton from '../../shared/HomeButton';
import ShoppingList from '../ShoppingList/ShoppingList';
import ToDoList from '../ToDoList/ToDoList';
import Swatches from '../Swatches/Swatches';
import Notes from '../Notes/Notes';
import Photos from '../Photos/Photos';

export default function Room() {
    return (
        <div className="room-container">
            <Header/>
            <h1>Room Name Here</h1>
            <HomeButton/>
            <button>Sign Out</button>

            <div className="room-components">
                <ShoppingList/>
                <ToDoList/>
                <Notes/>
                <Swatches/>
                <Photos/>
            </div>
        </div>
    )
}
