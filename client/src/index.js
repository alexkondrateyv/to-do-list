import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    todos: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return {...state, todos: action.data}
        default:
            return state
    }
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);