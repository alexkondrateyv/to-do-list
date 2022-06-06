import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import style from './Main.module.scss'

import {Update, Delete, Get} from '../../services/response'

function Main() {
    const dispatch = useDispatch();
    let res = useSelector(state => state.todos);

    const [todos, setTodo] = useState(res)

    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        setTodo(res)
    }, [res])

    async function getTasks() {
        try {
            const {data} = await Get();
            dispatch({type: 'UPDATE_DATA', data: data})
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteTask(id) {
        try {
            await Delete(id);
            const {data} = await Get();
            dispatch({type: 'UPDATE_DATA', data: data})
        } catch (error) {
            console.log(error);
        }
    }

    async function completeTask(id, boolean) {
        try {
            await Update(id, {completed: boolean});
            const {data} = await Get();
            dispatch({type: 'UPDATE_DATA', data: data})
        } catch (error) {
            console.log(error);
        }
    }

    const pendingItems = todos.map(elem => {
            if (!elem.completed) {
                return (
                    <div className={style.pendingItems} key={elem.id}>
                        <button className={style.menu} onClick={() => completeTask(elem.id, !elem.completed)}>Done</button>
                        <input type='text' value={elem.value || 'example'} maxLength='255' disabled/>
                        <button className={style.garbage} onClick={() => deleteTask(elem.id)}>Delete</button>
                    </div>
                )
            }
        }
    )
    const completedItems = todos.map(elem => {
            if (elem.completed) {
                return (
                    <div className={style.completedItems} key={elem.id}>
                        <button className={style.menu} onClick={() => completeTask(elem.id, !elem.completed)}>Redo</button>
                        <input type='text' value={elem.value || 'example'} maxLength='255' disabled/>
                        <button className={style.garbage} onClick={() => deleteTask(elem.id)}>Delete</button>
                    </div>
                )
            }
        }
    )
    return (
        <div className={style.main}>
            {pendingItems}
            {completedItems}
        </div>
    );
}

export default Main;