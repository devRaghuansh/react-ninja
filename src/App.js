import logo from './logo.svg';
import './App.css';
import CreateContext from './CreateContext';
import AccessContext from './AccessContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React Context</h1>
      <CreateContext />
      </header>
    </div>
  );
}

export default App;
