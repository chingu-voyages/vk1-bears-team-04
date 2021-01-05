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
  Account,
  Dashboard,
  Maps,
  Hotlines,
} from "../NavPages";

import ActivationEmail from "../Auth/Activation";
import MapsContent from "../NavPages/MapsContent";

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
          <Route path="/account" component={Account} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/maps" component={Maps} />
          <Route path="/hotlines" component={Hotlines} />
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
