import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import todoListReducer from './todolist/todoListSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todolist: todoListReducer,
    },
})