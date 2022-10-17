import React from 'react'
import {useState} from "react";
import Alert from "./Alert";
import List from './List';
import GroceryStyles from './GroceryStyles.css'

const GroceryList = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [alert, setAlert] = useState({ show: false, msg:'',type: ''})
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name) {

        } else if (name && isEditing) {

        } else {
            const newItem = {id: new Date().getTime().toString(), 
                title:name};
                setList([...list, newItem]);
                setName('')
        }
    }
  return (<section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h2>Grocery shopping List</h2>
        <div className='form-control'>
            <input 
            type='text' 
            className='grocery' 
            placeholder='e.g.eggs' 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
            />
            <button type='submit' className='submit-btn'>
                {isEditing ? 'edit' : 'submit'}
            </button>
        </div>
    </form>
    {list.length > 0 && (
        <div className='grocery-container'>
            <List items={list} className='list'/>
            <button className='clear-btn'>Clear items</button>
        </div>
    )}
    </section>
)}

export default GroceryList
