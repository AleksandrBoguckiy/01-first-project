import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./Components/Profile/MyPosts/Post/Post";
import DialogItem from "./Components/Dialogs/DialogItem/DialogItem";
import Message from "./Components/Dialogs/Message/Message";

let posts = [
    {id: '1', message: 'Hey, how are you?', like: '15'},
    {id: '2', message: "It's my first post!", like: '23'},
];

let dialogs = [
    {id: '1', name: 'Oleg'},
    {id: '2', name: 'Egor'},
    {id: '3', name: 'Mariya'},
    {id: '4', name: 'Aleksandr'},
    {id: '5', name: 'Ruslan'},
    {id: '6', name: 'Irina'}
];

let messages = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'Hey, are you there?'}
];

ReactDOM.render(

  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
