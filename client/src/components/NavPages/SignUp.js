import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex flex-col">
        <div className="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2 my-12">
          <form
            className="bg-white px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mb-8 text-2xl text-center font-bold uppercase">
              Create Account
            </h1>
            <input
              type="text"
              name="firstName"
              placeholder="Your First Name"
              ref={register}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Your Last Name"
              ref={register}
            />
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
            />
            <input
              type="password"
              name="password2"
              placeholder="Repeat your Password"
              ref={register}
            />
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="Terms and Agreement"
            />
            <label className="pl-2" for="terms">
              I agree to U Rescue Me's{" "}
              <a className="underline" href="/terms-of-services">
                Terms of Services.
              </a>
            </label>
            <input
              type="submit"
              value="Sign Up"
              className="w-full btn btn-primary subtle-shadow tracking-widest text-white uppercase hover:shadow-none"
            />
            <p className="text-center font-bold uppercase mt-6">or</p>
            <button className="btn w-full subtle-shadow">
              Sign up with Google
            </button>
            <button className="btn w-full subtle-shadow text-white bg-blue-900">
              Sign up with Facebook
            </button>
            <p className="text-center mt-4">
              Already have an account?&nbsp;
              <a href="/" className="font-bold underline">
                Login Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
