import React from "react";
import { Link } from "react-router-dom";
import contact from "../../images/contact.svg";
import { FaRegPaperPlane } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';

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
            <div className="justify-center flex">
              <Link
                to="/"
                className="btn btn-primary w-32 mt-0 text-white inline-flex justify-center items-center gap-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <FaRegPaperPlane/>Submit</Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img className="h-96" src={contact} alt="Contact" />
          </div>
        </div>

        <hr className="border-2 shadow-md"/>

        <div className="flex-col md:flex-row flex gap-5 px-10 pt-10 pb-14">

          <div className="border-2 border-yellow-300 rounded-3xl p-5">
            <div className="flex justify-center pb-3">
              <BiMap className="text-5xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="border-2 border-yellow-300 rounded-3xl p-5">
            <div className="flex justify-center pb-3">
              <AiOutlineMail className="text-5xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="border-2 border-yellow-300 rounded-3xl p-5">
            <div className="flex justify-center pb-3">
              <BiPhoneCall className="text-5xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
