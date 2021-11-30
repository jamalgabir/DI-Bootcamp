const User = (props)=>{
    const {user}=props;
    const {name,email,username,id}=user;
    return(
        <div id='card'>
            <img src={`https://robohash.org/${user.id}`}/>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
            <h4>{user.name}</h4>
        </div>
    )
}

export default User