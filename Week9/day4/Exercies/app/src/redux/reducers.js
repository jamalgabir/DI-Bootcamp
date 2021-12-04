import { SEARCH,USER } from "./action";


const initState={
    
    arr:[],
    text:'',
    
}


export const reducers=(state=initState,action={})=>{
    switch(action.type){
        case SEARCH:
            return {...state,text:action.payload}
        case USER:
            return {...state,arr:action.payload}
        default:
            return {...state}
    }
    
}