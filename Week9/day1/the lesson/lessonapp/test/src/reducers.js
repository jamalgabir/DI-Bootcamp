const initstat={
    props_one:'text one',
    props_two:'text two'
}
export const reducer=(state=initstat,action={})=>{
    console.log(action.type,action.payload);
    switch(action.type){
        case'props_two':
        return {...state,props_two:action.payload}
    }

}