import React from "react";
import { getUsers } from "../redux/action";
import {connect} from 'react-redux';
import User from './user';
class UserList extends React.Component{
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            this.props.getUsers(data)
        })

    }
    render(){
        console.log(this.props)
        const {users,text}=this.props;
        
        const filter = users.filter(item=>{
            return item.name.toLowerCase().includes(text.toLowerCase())
        })
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
    return{
        text:state.text,
        users:state.arr
    }
}
const mapDispatchToPros=(dispatch)=>{
    return{
        getUsers:(data)=>dispatch(getUsers(data))
    }

}


export default connect(mapStateToProps,mapDispatchToPros)(UserList);