import React from "react";
import { ReactComponent as CircleLogo } from "../../images/logo-with-circle-border.svg";

const Home = () => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex justify-center">
            <CircleLogo alt="CircleLogo" className="" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className="text-gray-900 text-4xl title-font font-bold mb-3">
                  U RESCUE ME
                </h1>
                <h2 className="text-gray-900 text-2xl font-medium mb-5">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className="leading-relaxed text-base lg:w-3/4 mb-3">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <a
                  href="/"
                  className="btn primary-btn w-1/4 mt-3 text-white inline-flex uppercase justify-center items-center"
                >
                  Sign Up
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
