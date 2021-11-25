import logo from './logo.svg';
import './App.css';
import React from 'react';
import QuoteAndAuthor from './Quote';
import quotes from './QuoteDatabase';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      quote:quotes[0].quote,
      author:quotes[0].quote
    };
  }
  randomQuote(){
    const randomNumber = Math.floor(Math.random()*quotes.length);
    return quotes[randomNumber];
  }
  shuffuleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }
  handleClick=()=>{
    const generateRandomQuote = this.randomQuote();this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffuleQuotes(quotes)
  };
  randomColor(){
    const color = `rgb(
      ${Math.floor(Math.random()*155)},
      ${Math.floor(Math.random()*145)},
      ${Math.floor(Math.random()*155)})`;
    console.log(color)
    return color;
  }
  render (){
    return (
      <div>
        <QuoteAndAuthor displayColor={this.randomColor}
        handleClick={this.handleClick}
        {...this.state}/>
      </div>
    );
  }
}

export default App;
