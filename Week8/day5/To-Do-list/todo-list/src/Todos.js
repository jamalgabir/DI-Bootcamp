import React from "react";


const Todos = ({todos,deletlist})=>{
    
    const todoList =todos.length ?(
        todos.map(todo =>{
            return (
                <div className="collection-item" key={todo.id}>
                  <span onClick={() => {deletlist(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
          
    )   :(
        <p className="center">You have no todo's left, yay!</p>
    );
    return (
        <div className="todos collection">
          {todoList}
        </div>
      )


}
export default Todos;