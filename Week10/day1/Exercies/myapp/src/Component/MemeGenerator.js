import React,{Component} from "react";

class MemeGenerator extends Component{
    
    
    
    
    
    
    
    render(){
        let rl='http://i.imgflip.com/1bij.jpg';
        
        return(
            <>
            <input type='text' name='toptext'/> <input type='text' name='btntext'/> 
             <button>Gen</button>
             <div id='img' >
                <h2 id='top'>top text</h2>
                <h2 id='bt'>button text</h2>
                <img src={rl}/>
                
             </div>
             
            </>
        )
    }
}
export default MemeGenerator;