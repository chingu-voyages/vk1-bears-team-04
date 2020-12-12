import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

import { Link, useHistory } from "react-router-dom";
import { dispatchLogin } from "../.././redux/actions/authAction";

import { isEmpty } from "../utils/Validation/validationMsg";

import {
  showErrMsg,
  showSuccessMsg,
} from "../utils/notification/notificationMsg";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());

      history.push("/dashboard");
      return swal({
        title: "Welcome !",
        icon: "success",
        type: "success",
        text: "You have successfully login!",
      });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };
  return (
    <>
      <div className="flex flex-col my-32">
        <div className="container bg-white max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15 text-center">
            <form onSubmit={submit}>
              <h1 className="mb-8 text-2xl font-bold uppercase text-center">
                Sign In
              </h1>
              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}

              <input
                type="text"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleChangeInput}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChangeInput}
                className=""
              />

              <button
                type="submit"
                className="btn btn-primary subtle-shadow w-full py-3 my-6 font-medium tracking-widest text-white uppercase focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Login
              </button>
              <p className="text-left">
                <Link to="/forgot-password" className="font-medium underline">
                  Forgot your Password?
                </Link>
              </p>
              <p className="text-center font-bold uppercase mt-6">or</p>
              <button className="btn w-full subtle-shadow">
                Sign up with Google
              </button>
              <button className="btn w-full subtle-shadow text-white bg-blue-900">
                Sign up with Facebook
              </button>
              <p className="text-center mt-4">
                Don't have an account yet?&nbsp;
                <Link to="/register" className="font-bold underline">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
