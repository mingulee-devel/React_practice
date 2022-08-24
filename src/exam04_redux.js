import React, {useState} from 'react';
import './App.css';
import {createStore} from 'redux';
//리액트 리덕스의 4인방
//컴포넌트, 어떤 state 값 사용할지 선택, state값 변경할 때 사용, connect는 아직 사용x
import {Provider, useSelector, useDispatch, connect} from "react-redux";

//store 안의 state를 어떻게 바꿀 것인가를 결정함.
function reducer(currentState, action) {
	//리덕스는 각각의 state 변화를 불변하게 유지해야함.
	if (currentState === undefined) {
		return {
			number: 1
		};
	}
	const newState = {...currentState} //과거의 state 복제, 복제본을 수정하면 불변성 유지 가능
	if (action.type === 'PLUS') { //plus일 때 숫자 변경
		newState.number++;
	}
	return newState;
}

//바뀌면 안되기 때문에 상수로 만들어줌.
const store = createStore(reducer);

export default function App() {
	return (
		<div id="container">
			<h1>Root</h1>
			<div id="grid">
				<Provider store={store}>
					<Left1></Left1>
					<Right1></Right1>
				</Provider>
			</div>
		</div>
	);
}

function Left1(props) {
	return (
		<div>
			<h1>Left1 </h1>
			<Left2></Left2>
		</div>
	);
}

function Left2(props) {
	console.log('2');
	return (
		<div>
			<h1>Left2 : </h1>
			<Left3></Left3>
		</div>
	);
}

function Left3(props) {
	console.log('3');
	const number = useSelector(state => state.number); //함수를 인자로 받는다.
	return (
		<div>
			<h1>Left3 : {number}</h1>
		</div>
	);
	//store에 저장된 number와 말단에 있는 number 연결된 것.
}

function Right1(props) {
	return (
		<div>
			<h1>Right1</h1>
			<Right2></Right2>
		</div>
	);
}

function Right2(props) {
	return (
		<div>
			<h1>Right2</h1>
			<Right3></Right3>
		</div>
	);
}

function Right3(props) {
	const dispatch = useDispatch(); //reducer 함수에 값을 넘겨줌.

	return (
		<div>
			<h1>Right3</h1>
			<input type="button" value="+" onClick={() => {
				dispatch({type: 'PLUS'})
			}}></input>
		</div>
	);
}
