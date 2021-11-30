import { connect } from "react-redux";
import { handleChange } from "../redux/action";

const SearchBox=(props)=>{
    return(
        <div >
            Search: <input type="text" onChange={props.handleChange}/>
        </div>
    )

}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleChange:(e)=>dispatch(handleChange(e.target.value))
    }
}

export default connect(null,mapDispatchToProps)(SearchBox);