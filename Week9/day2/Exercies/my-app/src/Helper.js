import { connect } from "react-redux";
import { handlechange,handleclick } from "./action";

export const Helper = (props)=>{
    
    return (
        <>
        <h2>Helper</h2>
        <div>
        change property one:<input onChange={props.handlechange}  type="text"/>
        </div>
        <div>
            change property one:<button onClick={()=>props.handleclick(props.prop_one)}>Click</button>
        </div>
          
        </>
    )
}
const mapStateToProps =(state)=>{
    return{
        prop_one:state.reducer_one.proporty_one

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handlechange: (e) =>dispatch(handlechange(e.target.value)),
        handleclick: (value)=>dispatch(handleclick(value))
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Helper)