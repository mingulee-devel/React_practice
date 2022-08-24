import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
	//각 슬라이서의 reducer가 들어감.
	reducer:{       // 이것을 createStore에 reducer로 전달
	                //counterSlice에 만들어놓은 여러 reducer를 하나로 합쳐주는 것이 아래 reducer이다.
		counter: counterSlice.reducer
	}
})

export default store;