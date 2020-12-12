import "./App.css";

import React, { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
<<<<<<< HEAD
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
  PageNotFound,
} from "./components/NavPages";

import { PrivateRoute } from "./components/Auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/authAction";

import Body from "./components/Body/Body";

import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> fbf909e62ac064e5894254f605c0606aab0df38b
function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = await axios.post("/user/refresh_token", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  return (
    <>
      <Router>
<<<<<<< HEAD
     <UserContext.Provider value={{ userData, setUserData }}>
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
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
    </UserContext.Provider>
=======
        <div className="App">
          <Body />
        </div>
>>>>>>> fbf909e62ac064e5894254f605c0606aab0df38b
      </Router>
    </>
  );
}

export default App;
