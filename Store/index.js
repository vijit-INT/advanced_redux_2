import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import todoSlice from "./todo-slice";
import RegisterSlice from "./register-slice";

const store = configureStore({
    reducer: { counter: counterSlice.reducer,
                todo: todoSlice.reducer,
                register: RegisterSlice.reducer,
                       
    }
});

export default store;