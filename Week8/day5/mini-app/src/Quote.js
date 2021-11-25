import React from 'react';
class QuoteAndAuthor extends React.Component{
    render(){
        const randomColor=this.props.displayColor();
        const html =document.documentElement;
        html.style.backgroundColor = randomColor;
        return (
             <div className="Quotebox">
                <div className="fadIn" key={Math.random()} style={{color:randomColor}}>
                    <h1 id='quote'>"{this.props.quote}"</h1>
                    <h5 id='author'>-{this.props.author ? this.props.author : 'Unknown'}-</h5>
                    <button style={{backgroundColor: randomColor}} id='newquote' onClick={this.props.handleClick}><h3>New quote</h3>
                        
                    </button>
                </div>

            </div>
        );
    }
}
export default QuoteAndAuthor;