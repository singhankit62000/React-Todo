import { createSlice } from "@reduxjs/toolkit";

const dummyTodoList = [{
    'id': 0,
    'item': "Let's get started"
}];

const todolistSlice = createSlice({
    name: 'todolist',
    initialState: {
        value: dummyTodoList,
    },
    reducers: {
        addItem: ((state, action) => {
            if(state.value[0].id === 0)
                state.value = [];

            state.value.push(action.payload);
        }),
        removeItem: ((state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);

            if(state.value.length === 0) {
                state.value = dummyTodoList;
            }
        }),
        editItem: ((state, action) => {
            let id = action.payload.id;
            state.value.find(obj => obj.id === id).item = action.payload.editedTask;
        }),
    }
})

export const { addItem, removeItem, editItem } = todolistSlice.actions;

export default todolistSlice.reducer;