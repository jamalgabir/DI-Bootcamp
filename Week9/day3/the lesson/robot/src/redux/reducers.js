import { SEARCH,USERS } from "./action";

const initState={
    arr:[],
    text:''
}

export const reduser = (state=initState,action={})=>{
    switch(action.type){
        case SEARCH:
            return{...state,text:action.payload}
        case USERS:
            return {...state,arr:action.payload}
        default:
            return {...state}
    }
}