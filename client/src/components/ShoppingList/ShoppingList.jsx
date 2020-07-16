import React from 'react';
import './ShoppingList.css';

export default function ShoppingList() {
    return (
        <div className="shopping-list">
            <h4>Shopping List</h4>
            <input placeholder="Add Item"></input>
            <button>+</button>
            <button>-</button>
            
        </div>
    )
}
