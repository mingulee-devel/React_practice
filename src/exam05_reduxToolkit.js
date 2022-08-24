
//리덕스 Toolkit
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store.js';
import up from "./counterSlice"; //export 선언해 놓은대로 가져옴

/*function reducer(state, action){
	if(action.type === 'up'){
		return {...state, value:state.value + action.step}
	}
	return state;
}
const initialState = {value:0}
const store = createStore(reducer, initialState);*/

function Counter(){
	const dispatch = useDispatch();
	//중괄호 안에 return 이 존재해야 한다.
	const count = useSelector(state=> {
		console.log(state);
		return state.counter.value;
	})
	return <div>
		<button onClick={()=>{
			// dispatch({type:'countername/up', step:2});
			dispatch(up(2)); //counterSlice.js에 up을 정의했기 때문에 사용 가능.
		}}>+</button> {count}
	</div>
}

export default function App(){
	return (
		<Provider store={store}>
			<div>
				<Counter></Counter>
			</div>
		</Provider>
	);
}
