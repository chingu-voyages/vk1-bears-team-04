import "./App.css";

import About from "./components/NavPages/About";
import Contact from "./components/NavPages/Contact";
import Features from "./components/NavPages/Features";
import Navbar from "./components/NavPages/Navbar";
import SignUp from "./components/NavPages/SignUp";
import Login from "./components/NavPages/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
