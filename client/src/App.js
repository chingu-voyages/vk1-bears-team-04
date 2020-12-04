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
  Dashboard,
  Faqs,
  Privacy,
  Terms,
  Forgot,
} from "./components/NavPages";

import { PrivateRoute } from "./components/Auth";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const userType = "admin";
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
          <Route path="/faqs" component={Faqs} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/terms-of-services" component={Terms} />
          <Route path="/forgot-password" component={Forgot} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
