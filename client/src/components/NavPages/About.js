import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Bg from "../../images/about-bg.jpg";
import Pin from "../../images/pin.png";
import { GiSmartphone } from 'react-icons/gi';
import { HiArrowRight } from 'react-icons/hi';
import { BiNews } from 'react-icons/bi';
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

      <section className="py-6">
        <div className="py-8 border-b-2 border-red-500">
            <h2 className="text-center text-4xl py-4">Our Mission</h2>
            <p className="sm:px-48 px-4 text-lg">U Rescue Me wants to lend a helping hand and make a influence on maximizing the use of internet and social media not only for the entertainment but also to extend some help for those who are in need.</p>
        </div>
        <hr className="font-semibold text-red-200" />
        <div className="py-8">    
            <h2 className="text-center text-4xl py-4">Our Vision</h2>
            <p className="sm:px-48 px-4 text-lg">To become a one of the best crowdsourcing website application that provides lots of rescue details provided by the community to easily forwarded it to those who are assign to do such search and rescue operation.</p>
        </div>
      </section>

      <section className="bg-yellow-300">
        <h2 className="text-center text-3xl font-semibold py-6">Get to know more on how to become a great user!</h2>

        <div className="flex-col md:flex-row flex gap-5 px-10 pt-10 pb-14">
          
          <div className="shadow-2xl rounded-3xl p-5 bg-white md:w-96">
            <div className="flex justify-center pb-3 border-b-2 border-red-500">
              <GiSmartphone className="text-7xl"/>
            </div>
            <p className="text-center py-2">Browse and search thru social media applications and look for an update regarding the current happenings and events on your place.
            </p>
          </div>

          <div className="shadow-2xl rounded-3xl p-5 bg-white md:w-96">
            <div className="flex justify-center pb-3 border-b-2 border-red-500">
              <BiNews className="text-7xl"/>
            </div>
            <p className="text-center py-2">It is also important to keep or atleast make a habit on Watching, Listening and Reading some important news.</p>
          </div>

          <div className="shadow-2xl rounded-3xl p-5 bg-white md:w-96">
            <div className="flex justify-center pb-3 border-b-2 border-red-500">
              <SiOpenstreetmap className="text-7xl"/>
            </div>
            <p className="text-center py-2">Be responsible and wise social media user. Look for the specific locations from some posts from people who needs an emergency help on social media, keep on sharing and extends some help as much as you can.</p>
          </div>

          <div className="shadow-2xl rounded-3xl p-5 bg-white md:w-96">
            <div className="flex justify-center pb-3 border-b-2 border-red-500">
              <AiFillAlert className="text-7xl"/>
            </div>
            <p className="text-center py-2">You can make a call to those emergency hotlines that sends emergency help or you can use some applications such as U Rescue Me to provide the gathered information to easily get forwarded the details to those rescuers.</p>
          </div>

        </div>
      </section>

    </>
    
  );
};

export default About;
