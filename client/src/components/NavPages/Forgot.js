import React from "react";
import { useForm } from "react-hook-form";
import { Dashboard } from "./";
import { PrivateRoute } from "../Auth";
import { useHistory } from "react-router-dom";

const Forgot = () => {
  return (
   <>
      <div className="flex flex-col my-32">
        <div className="container bg-white max-w-2xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="px-20 py-8 rounded-3xl subtle-shadow text-black w-full my-15 text-center">
            <form>
              <h1 className="mb-8 text-2xl font-bold normal-case text-center">
                Reset your Password
              </h1>
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className=""
              />

              <input
                type="password"
                name="password"
                placeholder="Confirm New Password"
                className=""
              />

              <button
                type="submit"
                className="btn btn-primary subtle-shadow w-full py-3 my-6 font-medium tracking-widest text-white text-1xl focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Forgot;
