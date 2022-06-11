import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from '../redux/TodoAction';

export const store = configureStore({
    reducer: {
        todo: toDoReducer
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch