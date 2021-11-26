import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0},
          // {name: "Php", votes: 0},
          // {name: "Python", votes: 0},
          // {name: "JavaSript", votes: 0},
          // {name: "Java", votes: 0}
      ]
    } 
  }
  vote (i) {
		let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
		this.setState({languages: newLanguages});
		
	}

	render(){
		return(
			<>
				<h1>Vote Your Language!</h1>
				<div className="languages">
					{

						this.state.languages.map((lang, i) => 
							<div key={i} className="language">
                
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
              
						)
            
					}
				</div>
			</>
		);
	}

}

export default App;
