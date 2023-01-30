import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 14},
    {id: 2, message: 'Its my first post', likesCount: 28},
    {id: 3, message: 'test', likesCount: 32},
    {id: 4, message: 'blabla', likesCount: 1},
    {id: 5, message: 'sssss', likesCount: 0},
]

let dialogs = [
    {id: 1, name: 'Daur'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Misha'},
    {id: 6, name: 'Pasha'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your course?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
