import "./App.css";
import React, { useState } from "react";
import UserContext from "./context/userContext";
import {
  About,
  Contact,
  Features,
  Navbar,
  SignUp,
  Login,
  Footer,
  Home,
  Dashboard,
} from "./components/NavPages";

import { PrivateRoute } from "./components/Auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/features" component={Features} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={SignUp} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
