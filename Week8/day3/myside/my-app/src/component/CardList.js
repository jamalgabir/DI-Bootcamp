import Card from './Card';
const CardList =(props)=>{
    const {arr_robot}=props;
    return(
        <div>
            
            {
              arr_robot.map((item,i)=>{
                  //console.log(item,i)
                  return <Card robot={item} id={i}/>
              })
              
            }
        </div>
    )
}
export default CardList;