import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg-grey-lighter flex flex-col my-32">
        <div className="container bg-white max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className=" px-20 py-8 rounded-3xl shadow-lg text-black w-full my-15 text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-8 text-3xl text-center">Sign In</h1>
              <input
                type="email"
                name="email"
                defaultValue="Your Email"
                ref={login}
                className="block border rounded-xl border-grey-light w-full p-3 mb-4"
              />

              <input
                type="password"
                name="password"
                defaultValue="Password"
                ref={login}
                className="block border rounded-xl border-grey-light w-full p-3 mb-4"
              />

              <button
                type="submit"
                className="btn primary-btn w-full py-3 my-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg rounded-full focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Login
              </button>
            </form>
            <span>Don't have an account yet? Register here</span>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
