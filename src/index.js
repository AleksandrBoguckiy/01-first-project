import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) => {

    ReactDOM.render(

        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 sendMessage={store.sendMessage.bind(store)}
                 updateSendMessageText={store.updateSendMessageText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')

    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);