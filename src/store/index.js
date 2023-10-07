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

export default store