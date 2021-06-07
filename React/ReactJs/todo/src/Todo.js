import React, { useState } from 'react'
import Item from './Item'
import Form from './Form'
import List from './List'
import './Todo.css'

function Todo() { 
   
    const[items, setItems]=useState([]);

    function onAddItem(text) {

        let item = new Item(text);
        setItems([...items, item])
    }

    function onItemDeleted(item){
        let filteredItem = items.filter(it=>it.id != item.id)
        setItems(filteredItem)
    }

    return (<div className="container">
        <h1>Todo</h1>
        <Form onAddItem={onAddItem}></Form>
        <List onItemDeleted={onItemDeleted} items={items}></List>
    </div>)}


    export default Todo;