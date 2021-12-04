import { handleChange } from "../redux/action";
import {connect} from 'react-redux'
const Searchbox=(props)=>{
    
    return (
        <>
        Search:<input type='text' onChange={props.handleChange}/>
        </>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleChange: (e)=>dispatch(handleChange(e.target.value))
    }
}


export default connect(null,mapDispatchToProps)(Searchbox);