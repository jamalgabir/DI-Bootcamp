export const minus='minus';
export const plus = 'plus';
export const restart= 'rest';

export const addone = () =>{
    return {
        type:plus
    }
}

export const minosone = ()=>{
    return {
        type:minus
    }
}
export const rest = ()=>{
    console.log('here')
    return {
        type:restart
    }
}