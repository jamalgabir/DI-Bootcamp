import React,{Component} from 'react';
import Garage from './Garage';
// function Car(){
//     return <h1>Hi,I am a Car!</h1>

// }

// export default Car;
class Car extends Component {
    constructor(){
        super()
        this.state={
            color:'blue',
            
        }
    }
    render(){
        return (
            <div>
                
            <h2>Hi,I am a {this.state.color} Car</h2>
            <Garage />
            </div>
        )
    }

}

export default Car;