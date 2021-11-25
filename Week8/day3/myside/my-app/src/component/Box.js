const SearchBox = (props) =>{
    //console.log('SearchBox props',props);
    return(
      <>
        Search:<input type="text" onChange={props.onSearch}/>
      </>
    )
  }
export default SearchBox;