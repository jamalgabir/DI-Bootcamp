import { connect } from "react-redux";

export const View = (props)=>{
    return (
        <>
        <h2>View</h2>
        <div>
            {props.one}
        </div>
        <div>
            {props.two}
        </div>
        </>
    )
}
const mapStateToProps =(state)=>{
    return {
        one:state.reducer_one.proporty_one,
        two:state.reducer_two.proporty_two
    }
}


export default connect(mapStateToProps)(View);

