import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
