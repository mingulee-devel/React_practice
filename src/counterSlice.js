//작은 slice를 모아 store를 만들 수 있다.
import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: 'countername',
	//초기값
	initialState:{value:0},
	//동작하는 reducer
	reducers:{
		up:(state, action)=>{
			//복제해줄 필요없음
			console.log(action);
			state.value = state.value + action.payload;
		}
	}
});

export default counterSlice;
//actions 중에서 up이 익스포트
export const {up} = counterSlice.actions;