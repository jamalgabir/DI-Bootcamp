export const USER = 'USER';
export const SEARCH = 'SEARCH';

export const handleChange =(value)=>{
    return {
        type:USER,
        payload:value
    }
}

export const getUsers=(arr)=>{
    return{
        type:SEARCH,
        payload:arr
    }
}