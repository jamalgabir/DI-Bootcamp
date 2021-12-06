export const Search=(props)=>{
    return(
        <>
        Search:<input id='ser' type='text' onChange={props.handleChange} placeholder='Search'/>
        </>
    )
}