import React from "react";
import style from './App.module.scss'

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Footer/>
            <Main/>
        </div>
    );
}

export default App;
