
import React,{Component} from "react";
class Garage extends Component{
    constructor(){
        super();
        this.state={
            size:'Small'
        }
    }
    render(){
        return <header>
            
            <h2>Who lives in my {this.state.size} Garage?</h2>
            </header>
    }
    
}
export default Garage;