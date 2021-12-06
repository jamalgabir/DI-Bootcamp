import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import './style.css';
import MemeGenerator from './Component/MemeGenerator';

function App() {
  return (
    <div className="App">
      <Header/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
