import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import classes from "./components/Navbar/Navbar.module.css";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {withRouter} from "./hoc/withRouter";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar state={this.props.store.getState().sidebarReducer}
                        activeFunc={tempIvent => tempIvent.isActive ? classes.activeLink : classes.item}/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/News" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})

let AppContainer = compose(withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter >
            <Provider store={store}>
                <AppContainer
                    store={store}
                    dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </HashRouter>)
}

export default SamuraiJSApp;
