import { minus,plus,restart } from "./action"




const initstate={
    count:0
}
export const reducer = (state=initstate,action={})=>{
    switch(action.type){
        case plus:
            return{...state, count:state.count+1 }
        case minus:
            return {...state,count:state.count-1}   
        case restart:
            return{count:0}
        
            default:
            return {...state}
    }


}