/*
Basic redux/react-redux implementation


import { createStore } from "redux";

const reducer = ( state={counter:0}, action) => {
  
    switch(action.type){
        case "INCREMENT":
            return{...state, counter: state.counter + 1}
        case "DECREMENT":
            return{...state, counter:state.counter - 1}
        case "ADD":
            return{...state, counter:state.counter + action.payload}
    }

    return state
}

const store = createStore(reducer)

export default store;
*/

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment (state, action){
            state.counter++;
        },
        decrement (state, action) {
            state.counter--;
        },
        addBy (state, action) {
            state.counter += 10;
        }
    }
})

export const actions = counterSlice.actions;

const store = configureStore({
    // despite us using the reducers property in the counterSlice object 
    // we still access them through the property reducer (combined)
    reducer: counterSlice.reducer
})

export default store;
