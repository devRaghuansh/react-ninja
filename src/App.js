import { Profiler } from 'react';
import logo from './logo.svg';
import './App.css';
import UserLogin from './UserLogin';

function App() {
  const callback = (id,phase,actualDuration,  baseDuration) => {
    console.log("id", id,phase,actualDuration, baseDuration)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Profiler</h1>
        <Profiler id='User' onRender={callback}>
          <UserLogin />
        </Profiler>
      </header>
    </div>
  );
}

export default App;
