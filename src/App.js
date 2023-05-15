import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
import Hooks from './hooks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

         Class Component
        </a>

      <Hooks/>
        <Profile text={{name:'Nouman'}}  data="Proflie Data"/>
      </header>
    </div>
  );
}

export default App;
