
const User = (props)=>{
    const {user}=props
    const {name,email,username,id}=user;
    return (
        <>
        <img src={`https://robohash.org/${id}`}/>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <h3>{user.name}</h3>
        </>
    )
}
export default User;