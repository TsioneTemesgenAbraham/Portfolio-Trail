import "./App.css";
import Home from "./pages/Home";
import Portofilio from "./pages/Portofilio";
import HamburgerMenu from "./pages/HamburgerMenu";

function App() {
  return (
    <div className="Ap">
      <header className="App-headr">
        <nav className="navbar">
          <HamburgerMenu />
        </nav>
      </header>

      <Home />
      <Portofilio />
    </div>
  );
}

export default App;
