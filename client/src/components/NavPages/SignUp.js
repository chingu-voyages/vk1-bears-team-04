import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="bg-grey-lighter flex flex-col">
        <div className="container max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            className="bg-white px-20 py-8 rounded-3xl shadow-lg text-black w-full my-15"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mb-8 text-3xl text-center">Create Account</h1>
            <input
              type="text"
              name="firstName"
              defaultValue="Your First Name"
              ref={register}
              className="block border rounded-xl border-grey-light w-full p-3 mb-4"
            />
            <input
              type="text"
              name="lastName"
              defaultValue="Your Last Name"
              ref={register}
              className="block border rounded-xl border-grey-light w-full p-3 mb-4"
            />
            <input
              type="email"
              name="email"
              defaultValue="Your Email"
              ref={register}
              className="block border rounded-xl border-grey-light w-full p-3 mb-4"
            />
            <input
              type="password"
              name="password"
              defaultValue="Password"
              ref={register}
              className="block border rounded-xl border-grey-light w-full p-3 mb-4"
            />
            <input
              type="password"
              name="password2"
              defaultValue="Repeat your Password"
              ref={register}
              className="block border rounded-xl border-grey-light w-full p-3 mb-4"
            />
            <input type="checkbox" />
            <input
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg rounded-full focus:outline-none hover:bg-gray-900 hover:shadow-none"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
