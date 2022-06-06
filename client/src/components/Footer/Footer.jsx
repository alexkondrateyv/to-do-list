import React from "react";
import style from './Footer.module.scss'
import {Delete, Get} from "../../services/response";

function Footer() {
    async function deleteAllTask() {
        try {
            const {data} = await Get();
            data.forEach(todo => Delete(todo.id))
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <footer className={style.footer}>
            <p>Delete all tasks from the list!</p>
            <button onClick={deleteAllTask}>Clear</button>
        </footer>
    );
}

export default Footer;