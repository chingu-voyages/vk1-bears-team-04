import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Bg from "../../images/about-bg.jpg";
import Pin from "../../images/pin.png";
import { FiUsers } from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';
import { BiMap } from 'react-icons/bi';
import { AiFillAlert } from 'react-icons/ai';
import { SiOpenstreetmap } from "react-icons/si";

const Content = styled.div`
    background-image: url(${Bg});
`;

const About = () => {
  return (
    <>
      <Content className="max-w-full bg-cover bg-center bg-no-repeat px-12 py-4">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 rounded-md bg-opacity-40 p-5">
          <div className="flex justify-center">
            <img className="max-h-56 sm:max-h-56 md:max-h-64 lg:max-h-72 xl:max-h-80" src={Pin} alt="Google Map"/>
          </div>

          <div className="py-20">
            <h2 className="text-5xl text-white">Every Click,</h2>
            <h2 className="text-5xl text-white">Can Save More Lives</h2>
            <p className="pt-5 text-white">Become a life saver to anyone, you can now become a hero without putting that much effort.</p>
            <div className="justify-center flex">
              <Link to="/register"
                className="btn btn-primary w-40 mt-3 text-white inline-flex  justify-center items-center gap-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">Sign Up Now<HiArrowRight/>
              </Link>
            </div>
          </div>

        </div>
      </Content>

      <section className="py-14">
        <h2 className="text-center text-4xl py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      <section className="bg-yellow-100">
        <div className="flex-col md:flex-row flex gap-5 px-10 pt-10 pb-14">

          <div className="shadow-2xl rounded-3xl p-5 bg-white">
            <div className="flex justify-center pb-3">
              <FiUsers className="text-7xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="shadow-2xl rounded-3xl p-5 bg-white">
            <div className="flex justify-center pb-3">
              <BiMap className="text-7xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="shadow-2xl rounded-3xl p-5 bg-white">
            <div className="flex justify-center pb-3">
              <AiFillAlert className="text-7xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="shadow-2xl rounded-3xl p-5 bg-white">
            <div className="flex justify-center pb-3">
              <SiOpenstreetmap className="text-7xl"/>
            </div>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>
      </section>

    </>
    
  );
};

export default About;
