import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import About from "./Components/About";
import Purchase from "./Components/Purchase";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <About />
      <Purchase />
    </div>
  );
}

export default App;
