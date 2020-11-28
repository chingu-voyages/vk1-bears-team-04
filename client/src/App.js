import "./App.css";

import {
  About,
  Contact,
  Features,
  Navbar,
  SignUp,
  Login,
  Footer,
  Home,
} from "./components/NavPages";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
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
      <Footer />
    </>
  );
}

export default App;
