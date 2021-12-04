import User from "./user";
import  {getUsers}  from "../redux/action";
import {connect} from 'react-redux'
import React,{Component} from 'react';
//import { handleChange } from "../redux/action";

class UserList extends Component{

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            this.props.getUsers(data)
        })
    }
    render(){
        const {text, users}=this.props
        console.log(this.props.text)
        const filter = users.filter(item=>{
            return item.name.toLowerCase().includes(text.toLowerCase())
            
        })
        console.log(filter)
        return(
            <>
               {
                filter.map((item,i)=>{
                    return <User user={item} key={i}/>
                })
              }
            </>
        )
    }
    
}

const mapStateToProps=(state)=>{
    return {
        text: state.text,
        users: state.arr,
        
        
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getUsers: (data) => dispatch(getUsers(data))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);