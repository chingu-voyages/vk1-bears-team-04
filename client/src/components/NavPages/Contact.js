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
            <h2 className=" text-center font-medium text-3xl py-5">We'd love to hear from you!</h2>
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

          <div className="sm:flex justify-center items-center hidden">
            <img className="h-96" src={contact} alt="Contact" />
          </div>
        </div>

        <hr className="border-2 shadow-md"/>

        <div className="flex-col md:flex-row flex gap-5 px-10 pt-10 pb-14 justify-center">

          <div className="border-2 border-yellow-300 rounded-3xl p-5 md:w-96">
            <div className="flex justify-center pb-3">
              <BiMap className="text-5xl text-red-600"/>
            </div>
            <p className="text-center">Currently located at<a href="https://www.google.com/maps/place/Metro+Manila/data=!4m2!3m1!1s0x3397c8d26026386d:0x5fed23daac9278d0?sa=X&ved=2ahUKEwi9___hs4XuAhVMG6YKHdEjBQkQ8gEwFXoECCwQAQ" className="font-semibold"> Metro Manila, Philippines.</a></p>
          </div>

          <div className="border-2 border-yellow-300 rounded-3xl p-5 md:w-96">
            <div className="flex justify-center pb-3">
              <AiOutlineMail className="text-5xl text-red-600"/>
            </div>
            <p className="text-center">You can reach us by sending us email at <a className="font-semibold" href="mailto:urescueme.info@gmail.com">urescueme.info@gmail.com</a>.</p>
          </div>

          <div className="border-2 border-yellow-300 rounded-3xl p-5 md:w-96">
            <div className="flex justify-center pb-3">
              <BiPhoneCall className="text-5xl text-red-600"/>
            </div>
            <p className="text-center">You can now call us at <span className="font-semibold">555-555-5555</span>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
