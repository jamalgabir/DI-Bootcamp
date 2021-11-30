export const prop_one = 'prop_on';
export const  prop_two = 'prop_two';


export const handlechange=(value)=>{
    return {
        type:prop_one,
        payload:value
    }
}

export const handleclick = (value) =>{
   return {
       type:prop_two,
       payload:value
   }
}
