import React from "react";
import { Link } from "react-router-dom";

import "../../tailwind.config";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-gray-800 relative pt-1 text-white ">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">LOGO</div>
              <div className="flex flex-col w-2/5">
                <span className="font-bold text-white uppercase mb-2">
                  U rescue me
                </span>
                <span className="text-justify px-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  ac diam a est placerat cursus. Vestibulum ut imperdiet velit.
                  Nulla sed nulla ultricies, lobortis sem a, mollis nibh.
                  Curabitur odio ex, pulvinar vel diam eget, ultricies
                  ullamcorper nisi. Etiam et faucibus augue, eu lobortis lectus.
                </span>
              </div>
              <div className="flex w-2/1 flex-col">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                  Site Links
                </span>
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
              <div className="flex w-1/4 flex-col">
                <span className="mt-5 py-4">
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
        <div className=" mx-auto px-6  bg-black">
          <div className="mt-16  flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-white-700 font-bold mb-2 ">
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
