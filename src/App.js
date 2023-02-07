import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import classes from "./components/Navbar/Navbar.module.css";


const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebarReducer} activeFunc={ tempIvent => tempIvent.isActive ? classes.activeLink : classes.item }/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile
                            profilePage={props.state.profileReducer}
                            dispatch={props.dispatch}
                        />
                        }/>
                        <Route path="/dialogs/*" element={<Dialogs
                            dialogsPage={props.state.dialogsReducer}
                            newPostText={props.state.dialogsReducer.newMessageText}
                            dispatch={props.dispatch}/>}/>
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