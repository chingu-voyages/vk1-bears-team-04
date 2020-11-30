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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
