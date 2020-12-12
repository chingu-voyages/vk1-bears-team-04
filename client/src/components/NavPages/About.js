import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Bg from "../../images/about-bg.jpg";
import Pin from "../../images/pin.png";

const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${Bg});
`;

const About = () => {
  return (
    <div>
      <Content className="max-w-full bg-cover bg-center bg-no-repeat px-12 py-4">
        <div className="bg-white grid grid-cols-2 gap-2 rounded-md bg-opacity-40 p-5">
          <div className="py-20">
            <h2 className="text-6xl text-white">Lorem Ipsum</h2>
            <h2 className="text-4xl text-white">Dolor Sit Amet</h2>
            <p className="pt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="justify-center flex">
              <Link to="/"
                className="btn btn-primary w-40 mt-0 text-white inline-flex justify-center items-center gap-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up Now<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
                </Link></div>
          </div>

          <div className="flex justify-center"><img className="max-h-80" src={Pin} alt="Google Map"/></div>
        </div>
      </Content>

      <section className="py-14">
        <h2 className="text-center text-4xl py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      <section className="bg-yellow-100">
        <div className="flex-col md:flex-row flex gap-5 px-10 pt-10 pb-14">

          <div className="shadow-2xl rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className="shadow-2xl rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className="shadow-2xl rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <div className="shadow-2xl rounded-3xl p-5">
            <div className="flex justify-center pb-3"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

        </div>

      </section>

    </div>
    
  );
};

export default About;
