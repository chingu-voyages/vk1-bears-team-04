import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  About,
  Contact,
  Features,
  Navbar,
  SignUp,
  Login,
  Footer,
  Home,
  Faqs,
  Privacy,
  Terms,
  Forgot,
  PageNotFound,
  Geo,
  DashboardRouter,
  FirstMenu,
  SecondMenu,
} from "../NavPages";

import ActivationEmail from "../Auth/Activation";
import Dashboard from "../NavPages/Dashboard";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  return (
    <section>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/features" component={Features} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/terms-of-services" component={Terms} />
          <Route path="/forgot-password" component={Forgot} />
          <Route path="/main" component={DashboardRouter} />
          <Route path="/firstmenu" component={FirstMenu} />
          <Route path="/secondmenu" component={SecondMenu} />
          <Route
            path="/user/activate/:activation_token"
            component={ActivationEmail}
            exact
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </section>
  );
}

export default Body;
