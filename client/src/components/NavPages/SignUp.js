import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import {
  showErrMsg,
  showSuccessMsg,
} from "../utils/notification/notificationMsg";
import {
  isEmpty,
  isEmail,
  isLength,
  isMatch,
  isStringOnly,
} from "../utils/Validation/validationMsg";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  password2: "",
  err: "",
  success: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initialState);
  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    err,
    success,
  } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (isEmpty(firstName) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    if (!isStringOnly(firstName) || !isStringOnly(lastName))
      return setUser({ ...user, err: "Invalid name format.", success: "" });

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid email format.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, password2))
      return setUser({ ...user, err: "Password did not match.", success: "" });

    try {
      const res = await axios.post("http://localhost:5000/user/register", {
        firstName,
        lastName,
        email,
        password,
      });

      setUser({ ...user, err: "", success: res.data.msg });
      return swal({
        title: "Register Success!",
        text: " Please activate your email to start!",
        icon: "success",
        type: "success",
      }).then(function () {
        window.location = "/login";
      });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2 my-12">
          <form
            onSubmit={submit}
            className="bg-white px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15"
          >
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <h1 className="mb-8 text-3xl text-center font-bold">
              Create Account
            </h1>

            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Your First Name"
              id="registerFname"
              autoComplete="off"
              onChange={handleChangeInput}
            />

            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Your Last Name"
              id="registerLname"
              autoComplete="off"
              onChange={handleChangeInput}
            />

            <input
              type="text"
              name="email"
              value={email}
              placeholder="Your Email"
              id="registerEmail"
              autoComplete="off"
              onChange={handleChangeInput}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              id="registerPass"
              onChange={handleChangeInput}
            />

            <input
              type="password"
              name="password2"
              value={password2}
              onChange={handleChangeInput}
              placeholder="Repeat your Password"
              id="registerRPass"
            />

            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="Terms and Agreement"
              required
            />
            <label className="pl-2" htmlFor="terms">
              I agree to U Rescue Me's{" "}
              <a className="underline" href="/terms-of-services">
                Terms of Services.
              </a>
            </label>
            <button
              type="submit"
              className="btn btn-primary subtle-shadow w-full py-3 my-6 font-medium tracking-widest text-white focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              {" "}
              Sign Up
            </button>

            <p className="text-center font-bold uppercase mt-6">or</p>

            <button className="btn w-full subtle-shadow">
                Sign up with Google
            </button>
            <button className="btn w-full subtle-shadow text-white bg-blue-900">
                Sign up with Facebook
            </button>

            <p className="text-center mt-4">
              Already have an account?&nbsp;
              <Link to="/login" className="font-bold underline">
                Login Here
              </Link>
            </p>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
