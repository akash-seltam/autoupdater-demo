import logo from "./logo.svg";
import "./App.css";

function App() {
  //   console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Autoupdater Demo v{process.env.REACT_APP_VERSION}</p>
      </header>
    </div>
  );
}

export default App;
