import React from "react";
import { useForm } from "react-hook-form";
import { Dashboard } from "./";
import { PrivateRoute } from "../Auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    if (data.email === "user@test.com" && data.password === "password") {
      return history.push("/dashboard");
    }
  };

  return (
    <>
      <div className="flex flex-col my-32">
        <div className="container bg-white max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15 text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-8 text-2xl font-bold uppercase text-center">
                Sign In
              </h1>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                ref={register}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
                className=""
              />

              <button
                type="submit"
                className="btn btn-primary subtle-shadow w-full py-3 my-6 font-medium tracking-widest text-white uppercase focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Login
              </button>
              <p className="text-left"><a className="font-medium underline" href="/forgot-password">Forgot your Password?</a></p>
              <p className="text-center font-bold uppercase mt-6">or</p>
              <button className="btn w-full subtle-shadow">
                Sign up with Google
              </button>
              <button className="btn w-full subtle-shadow text-white bg-blue-900">
                Sign up with Facebook
              </button>
              <p className="text-center mt-4">
                Don't have an account yet?&nbsp;
                <a href="/" className="font-bold underline">
                  Register here
                </a>
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
