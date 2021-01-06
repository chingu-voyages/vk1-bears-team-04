import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";

import "../../tailwind.config";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-gray-800 relative pt-1 text-white ">
        <div className="mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-4 flex flex-col md:flex-row justify-between">
              <Link to="/" className="flex flex-col justify-center items-center"><Logo className="w-1/4 sm:w-4 md:w-2/4" /></Link>

              <div className="w-full py-2 flex flex-col">
                <span className="font-bold uppercase text-2xl text-white mb-2">
                  U Rescue Me
                </span>
                <span className="text-justify px-2">
                A Crowdsourcing Web Application that supports many people who wanted to reach someone for help to provide informations by filling up a rescue form. With the support from U Rescue Me, rescuers can easily gather the required information. This application can also be used by non-emergency services that need to gather crowd intelligence in a search operation.
                </span>
              </div>


                <div className="text-white w-full md:w-2/5 mb-2 px-3">
                    <h3 className="font-bold text-1xl py-2 text-2xl">Site Links</h3>
                    <div className="flex">
                      <div className="flex flex-col w-full sm:w-full md:w-2/4">
                        <span className="my-2">
                          <Link
                            to="/about-us"
                            className="text-white text-md hover:text-blue-500"
                          >
                            About Us
                          </Link>
                          
                        </span>
                        <span className="my-2">
                          <Link
                            to="/features"
                            className="text-white  text-md hover:text-blue-500"
                          >
                            Features
                          </Link>
                        </span>
                        <span className="my-2">
                          <Link
                            to="/contact"
                            className="text-white text-md hover:text-blue-500"
                          >
                            Contact Us
                          </Link>
                        </span>
                      </div>

                      <div className="flex flex-col w-full sm:w-full md:w-2/4">
                        <span className="my-2">
                          <Link
                            to="/privacy-policy"
                            className="text-white  text-md hover:text-blue-500"
                          >
                            Privacy Policy
                          </Link>
                        </span>
                        <span className="my-2">
                          <Link
                            to="/faqs"
                            className="text-white  text-md hover:text-blue-500"
                          >
                            FAQS
                          </Link>
                        </span>
                      </div>
                    </div>
                </div>


            </div>
          </div>
        </div>

        <div className=" mx-auto px-6  bg-black">
          <div className="mt-16  flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-4">
              <p className="text-sm text-white-700">
                © 2020 U RESCUE ME. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
