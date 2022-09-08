import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exam01 from './exam01.js';
import Exam02_mui from './exam02_mui.js';
import Exam02_mui_Login from './exam02_mui_Login';
import Exam03_routerDOM from "./exam03_routerDOM";
import Exam04_redux from "./exam04_redux";
import Exam05_reduxToolkit from './exam05_reduxToolkit';
import ModalMainComponent from './exam07_modal';
import ReactModalComponent from './exam07_reactModal';
import TabComponent from './exam08_tab';
import BasicTable from './exam09_tbl';
import CheckTable from './exam10_tblCheck';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

function Route_custom(){
		return (
				<BrowserRouter>
					<ModalMainComponent></ModalMainComponent>
						{/*<div>
								<h1>Hello Router</h1>
								<ul>
										<li><NavLink to="/">Home</NavLink></li>
										<li><NavLink to="/exam01">리액트 기초</NavLink></li>
										<li><NavLink to="/exam02_mui">mui 기초</NavLink></li>
										<li><NavLink to="/exam02_mui_Login">로그인 페이지</NavLink></li>
										<li><NavLink to="/exam03_routerDOM">라우터 돔</NavLink></li>
								</ul>
								<Routes>
										<Route exact path="/" element={<Route_custom/>}></Route>
										<Route exact path="/exam01" element={<Exam01 />}></Route>
										<Route path="/exam02_mui" element={<Exam02_mui />}></Route>
										<Route exact path="exam02_mui_Login" element={<Exam02_mui_Login/>}></Route>
										<Route path="/exam03_routerDOM" element={<Exam03_routerDOM />}></Route>
										<Route path="*" element={"Not Found"}></Route>
								</Routes>
						</div>*/}
				</BrowserRouter>
		);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Route_custom />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
