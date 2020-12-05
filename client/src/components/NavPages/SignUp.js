import React, { useState, useRef, useEffect } from "react";
// import Axios from "axios";
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const [info, setInfo] = useState();
  const { mutate: registerUser } = useMutate({
    verb: "POST",
    path: "http://localhost:5000/user/register",
  });

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // check passwords if matched
  const watchPassword = useRef({});
  watchPassword.current = watch("password", "");

  //register user
  // const submit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const newUser = { firstName, lastName, email, password };
  //     await Axios.post("http://localhost:5000/user/register", newUser);
  //   } catch (err) {}
  // };

  const submit = (data) => {
    setInfo();
    registerUser(data).then((_) =>
      setInfo("Please check your email and activate your account")
    );
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2 my-12">
          <form
            onSubmit={handleSubmit(submit)}
            className="bg-white px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15"
          >
            <small className="  p-4   text-center ">{info}</small>
            <h1 className="mb-8 text-2xl text-center font-bold uppercase ">
              Create Account
            </h1>

            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              id="registerFname"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
              ref={register({
                required: " First Name is Required !",
                minLength: { value: 3, message: "First Name is too short" },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Invalid Format",
                },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 m-3">{errors.firstName.message}</p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              id="registerLname"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
              ref={register({
                required: " Last Name is Required !",
                minLength: { value: 3, message: "Last name is too short" },
                maxLength: { value: 20, message: "Last Name is too long" },
                pattern: {
                  value: /^[A-Za-z_ ]+$/,
                  message: "Invalid format",
                },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 m-3">{errors.lastName.message}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id="registerEmail"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              ref={register({
                required: " Email is required !",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 m-3">{errors.email.message}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="registerPass"
              onChange={(e) => setPassword(e.target.value)}
              ref={register({
                required: " Password is required !",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,20}$/,
                  message:
                    "Password must contain one : number, uppercase , lowercase, special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 m-3">{errors.password.message}</p>
            )}
            <input
              type="password"
              name="password2"
              placeholder="Repeat your Password"
              id="registerRPass"
              ref={register({
                validate: (value) =>
                  value === watchPassword.current ||
                  "The passwords do not match !",
              })}
            />
            {errors.password2 && (
              <p className="text-red-500 my-3">{errors.password2.message}</p>
            )}
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="Terms and Agreement"
              required
            />
            <label className="pl-2" htmlFor="terms">
              I agree to U Rescue Me's{" "}
              <a className="underline" href="/">
                Terms of Service.
              </a>
            </label>
            <button
              type="submit"
              className="btn btn-primary subtle-shadow w-full py-3 my-6 font-medium tracking-widest text-white uppercase focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              {" "}
              SIGN UP
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
