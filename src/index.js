import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Exam01 from './exam01.js';
import Exam02_mui from './exam02_mui.js';
import Exam02_mui_Login from './exam02_mui_Login';
import Exam03_routerDOM from "./exam03_routerDOM";

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Exam03_routerDOM />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
