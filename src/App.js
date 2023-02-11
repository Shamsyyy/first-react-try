import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import classes from "./components/Navbar/Navbar.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.store.getState().sidebarReducer}
                        activeFunc={ tempIvent => tempIvent.isActive ? classes.activeLink : classes.item }/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile /*store={props.store}*//>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer /*store={props.store}*//>}/>
                        <Route path="/users" element={<UsersContainer />}/>
                        <Route path="/News" element={<News />}/>
                        <Route path="/music" element={<Music />}/>
                        <Route path="/settings" element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;