import {combineReducers}from 'redux';
import { prop_one,prop_two } from './action';

const initStateone={
    proporty_one:'one 1111',
    proporty_two:'two 222222'
}

export const reducer_one =(state=initStateone,action={})=>{
    switch(action.type){
        case prop_one:
            return {...state,prop_one:action.payload}
        default:
            return{...state}
    }
}

const initStatetwo={
    proporty_two:'two 222222122121212'
}
export const reducer_two = (state=initStatetwo,action={})=>{
    switch(action.type){
        case prop_two:
            return {...state,proporty_two:action.payload}
        default:
            return {...state}
    }
}
export const reducer = combineReducers({
    reducer_one,
    reducer_two
})
