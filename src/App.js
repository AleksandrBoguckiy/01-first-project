import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile />} />
                    <Route path='/users' render ={ () => <UsersContainer /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
