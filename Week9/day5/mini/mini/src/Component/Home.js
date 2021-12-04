import React from 'react';
import blog from '../blog.png'
import '../App.css';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Home extends React.Component{
    render(){
        console.log(this.props)
        const {posts}=this.props
        const postList=posts.length ? (
            posts.map(post=>{
                return (
                    
                    
                    
                    <div id='post' key={post.id}>
                     <img src={blog} alt="blog"/>
                     <div>
                        <Link to={"/"+post.id}>
                          <span>{post.title}</span>
                          <p>{post.body}</p>
                       </Link>

                     </div>
                    </div>
        
                
            
                )
            })
        ): (
            <div className="center">No posts to show</div>
        );
        return(
        
             <div>
                 <div>
                     <h4>Home</h4>
                     {postList}
                 </div>
             </div>
       
        )
        
    }
}
const mapStateToProps =(state)=>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps) (Home);