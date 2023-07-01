import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import SamuraiJSApp from "./App";
import { createRoot } from 'react-dom/client';

const element = document.getElementById('root');
const root = createRoot(element!);



root.render(
    <React.StrictMode>
        <SamuraiJSApp store={store} />
    </React.StrictMode>
);



reportWebVitals();