import React,{Component} from "react";

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            url:''
            
        }
    }
    
    
    
    
    
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(data=>{(this.setState({data:data}))})
        
    }
    render(){
         const info = this.state.data
        // let img = info.map((item,i)=>{
        //     return this.setState({url:item[0].url})
        // })
        //console.log(url)
        let rl='http://i.imgflip.com/1bij.jpg';
        
        return(
            <>
            {info.map((img)=>(
                <div>{JSON.stringify(img)}</div>
            ))}
            {/* <input type='text' name='toptext'/> <input type='text' name='btntext'/> 
             <button>Gen</button>
             
             <div id='img' >
                <h2 id='top'>top text</h2>
                <h2 id='bt'>button text</h2>
                <img src={rl}/>
                
             </div> */}
             
            </>
        )
    }
}
export default MemeGenerator;