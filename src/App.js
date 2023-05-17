import React, {Suspense, useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import classes from "./components/Navbar/Navbar.module.css";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect, Provider } from "react-redux";
import { withRouter } from "./hoc/withRouter";
import { initializeApp } from "./redux/appReducer.ts";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/reduxStore";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error/Error404";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

const App = (props) => {
    const catchAllUnhandledErrors = (reason, promiseRejectionEvent) => {
        alert("Some error occurred. Look at the console");
        console.error(promiseRejectionEvent)
    }

    useEffect(() => {
        props.initializeApp();
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        }
    }, [])

    if (!props.initialized) {
        return <Preloader />
    }

    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar state={props.store.getState().sidebarReducer} activeFunc={tempIvent => tempIvent.isActive ? classes.activeLink : classes.item} />
            <div className='app-wrapper-content'>
                <Suspense fallback={<div><Preloader /></div>}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile" />} />
                        <Route path="/profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/News" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})

let AppContainer = compose(withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter >
            <Provider store={store}>
                <AppContainer
                    store={store}
                    dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>)
}

export default SamuraiJSApp;
