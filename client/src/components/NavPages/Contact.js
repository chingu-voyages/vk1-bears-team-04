import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <> 
      <div>
        <h1 className=" text-center font-medium text-4xl py-10">Contact Us</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="px-10 pb-10">
            <h2 className=" text-center font-medium text-3xl py-5">Get in touch</h2>
            <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
            <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
            <textarea
                class="w-full h-32" placeholder="Message">
                </textarea>
            <div className="justify-center flex"><Link
                to="/"
                className="btn btn-primary w-32 mt-0 text-white inline-flex uppercase justify-center items-center gap-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg> Submit
                </Link></div>
          </div>

          <div>
            <p>[Embedded Google Map Location]</p>
          </div>
        </div>

        <hr className="border-2 shadow-md"/>

        <div className="flex-col md:flex-row flex gap-5 px-10 pt-10 pb-14">

          <div className="border-2 border-yellow-300 rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className="border-2 border-yellow-300 rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className="border-2 border-yellow-300 rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
