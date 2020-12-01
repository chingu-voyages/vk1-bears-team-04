import React from "react";
import { ReactComponent as CircleLogo } from "../../images/logo-with-circle-border.svg";
import step1 from "../../images/step-1.svg";
import step2 from "../../images/step-2.svg";
import step3 from "../../images/step-3.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-48 mx-auto flex flex-wrap mb-12">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex justify-center">
            <CircleLogo alt="CircleLogo" className="" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className="text-gray-900 text-6xl title-font font-bold mb-3">
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
                <Link
                  to="/sign-up"
                  className="btn btn-primary w-1/4 mt-3 text-white inline-flex uppercase justify-center items-center"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-300">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Want to help out?
          </h2>
          <h2 className="text-center text-xl font-medium text-gray-900 mb-6">
            Just follow these 3 Easy Steps
          </h2>
          <div className="flex flex-wrap">
            <div className="py-4 px-16 lg:w-1/3">
              <div className="h-full bg-white subtle-shadow pb-24 rounded-lg overflow-hidden text-center relative">
                <div className="flex justify-center h-64">
                  <img src={step1} alt="Step 1" />
                </div>
                <div className="btn-primary pt-1 mb-6"></div>
                <h2 className="px-12 tracking-widest text-2xl title-font font-bold text-gray-900 mb-3">
                  Look out for Posts
                </h2>
                <p className="px-12 leading-relaxed mb-3">
                  People posts information regarding their situation in Social
                  Media.
                </p>
              </div>
            </div>

            <div className="py-4 px-16 lg:w-1/3">
              <div className="h-full bg-white subtle-shadow pb-24 rounded-lg overflow-hidden text-center relative">
                <div className="flex justify-center h-64">
                  <img src={step2} alt="Step 2" />
                </div>
                <div className="btn-primary pt-1 mb-6"></div>
                <h2 className="px-12 tracking-widest text-2xl title-font font-bold text-gray-900 mb-3">
                  Crowdsource Information
                </h2>
                <p className="px-12 leading-relaxed mb-3">
                  Add all the necessary information that are asked in the form.
                </p>
              </div>
            </div>

            <div className="py-4 px-16 lg:w-1/3">
              <div className="h-full bg-white subtle-shadow pb-24 rounded-lg overflow-hidden text-center relative">
                <div className="flex justify-center h-64">
                  <img src={step3} alt="Step 3" />
                </div>
                <div className="btn-primary pt-1 mb-6"></div>
                <h2 className="px-12 tracking-widest text-2xl title-font font-bold text-gray-900 mb-3">
                  Leave the rest to Us!
                </h2>
                <p className="px-12 leading-relaxed mb-3">
                  We will coordinate with local rescue units to ensure that help
                  will come to their locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
