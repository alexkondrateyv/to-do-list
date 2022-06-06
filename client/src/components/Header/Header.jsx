import React, {useState} from "react";
import {useDispatch} from "react-redux";
import style from './Header.module.scss'

import {Add, Get} from "../../services/response";

const Header = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('')

    async function addTask(value) {
        if (text !== '') {
            try {
                Add({completed: false, value: value})
                const {data} = await Get();
                dispatch({type: 'UPDATE_DATA', data: data})
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className={style.header}>
            <p>To-do list</p>
            <div className={style.input}>
                <input type='text' placeholder='Enter new todo...' maxLength='255' className='input'
                       onChange={event => setText(event.target.value)}/>
                <button onClick={() => addTask(text)}>Add</button>
            </div>
        </div>
    )
}

export default Header;