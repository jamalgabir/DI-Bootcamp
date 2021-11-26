import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'tachyons';
import BootstrapCard from './BootstrapCard';

function App() {
  // const PrintHello=()=>{
  //   return <h1>I love React</h1>;
  // }
  const PrintHello=()=>{
    return <h1>I'm a React Component!</h1>;
  }


  const Jumbotron=(props)=>{
    return(
        <div className="p-5 bg-light">
        <h1 className="mb-3">{props.title}</h1>
        <h4 className="mb-3">{props.description}</h4>
        <a className="btn btn-primary" href="" role="button">{props.buttonLabel}</a>
        </div>
    )
  }
  return (
    <div>
      < PrintHello/>
    <div className="card m-5" style={{width: '30rem'}}>
      <img className="card-img-top" src="https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg" alt="Card image cap" />
    <div className=" tc">
      <h5 className="card-title">Bob Dylan</h5>
      <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
      <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
    </div>
  </div>
  <br/>
  < BootstrapCard/>
  <br/>
  < Jumbotron title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"/>
  </div>
  );
}

export default App;
