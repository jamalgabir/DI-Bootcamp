import React,{Component} from 'react';

class BootstrapCard extends Component{
    constructor(){
        super();
        this.state={
            title:"McCartney",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
            buttonLabel:"Go to Wikipedia",

            buttonUrl:"https://en.wikipedia.org/wiki/Paul_McCartney",

            description:"Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
        }
    }
    
    render(){
        return(
            <div className="card m-5" style={{width: '30rem'}}>
              <img className="card-img-top" src={this.state.imageUrl} alt="Card image cap" />
            <div className="tc">
              <h5 className="card-title">{this.state.title}</h5>
              <p className="card-text">{this.state.description}</p>
              <a href={this.state.buttonUrl} className="btn btn-primary">{this.state.buttonLabel}</a>
            </div>

            </div>
        )
    }





}
export default BootstrapCard;