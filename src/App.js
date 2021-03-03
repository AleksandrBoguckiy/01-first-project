import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route redirect='' path='/profile' render={()=><Profile
                        store={props.store} />} />
                    <Route path='/dialogs' render={()=><DialogsContainer
                        store={props.store}/> } />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
