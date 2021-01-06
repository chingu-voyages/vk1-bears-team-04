import React from "react";
import styled from 'styled-components';
import featureBanner from "../../images/feature-banner.svg";
import crowdsource from "../../images/crowdsource-feature.svg";
import map from "../../images/map-feature.svg";
import admin from "../../images/admin-feature.svg";

const Content = styled.div`
    background-image: url(${featureBanner});
`;

const Features = () => {
  return (
    <>
      <div>
        <Content className="max-w-full bg-cover bg-top bg-no-repeat sm:bg-top md:bg-top lg:bg-top xl:bg-top">
          <h1 className="font-semibold py-2 text-center text-2xl sm:py-4 md:py-8 sm:text-2xl md:text-3xl xl:text-4xl">Features Guide to become a hero!</h1>
          <p className="px-4 text-center h-52 sm:py-4 md:py-8 sm:text-xl md:text-1xl xl:text-2xl sm:h-64 md:h-80 xl:h-96 sm:px-14 md:px-16 xl:px-28">These features can give you some hints and a guide for you on how does this web can help others and you for being a hero.</p>
        </Content>

        <section className="bg-yellow-300 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2 px-4"> 
          <div className="px-5 shadow-2xl rounded-3xl bg-gray-50">
            <h2 className="text-2xl py-4 border-b-2 border-red-500">Crowdsourcing</h2>
            <p className="py-4 px-2">Crowdsource is collecting of information and datas from a group of people or an individual. U Rescue Me web app has the feature that crowdsource important emergency information or details and tasked to forward those informations to the authorized persons to do such search and rescue operations.</p>
          </div>
          <div className="flex justify-center"><img className="justify-center h-64" src={crowdsource} alt="Crowdsource Feature" /></div>
        </section>

        <section className="bg-yellow-300 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2 px-4"> 
          <div className="flex justify-center"><img className="justify-center h-64" src={map} alt="Map Location Feature" /></div>
          <div className="px-5 shadow-2xl rounded-3xl bg-gray-50">
            <h2 className="text-2xl py-4 border-b-2 border-red-500">Map Location</h2>
            <p className="py-4 px-2">Uses maps can be a guide and also to determine specific location for the users and community to observe and locate where the exact location of the people who needs the help and to do the rescue operation on that specific location</p>
          </div>
        </section>

        <section className="bg-yellow-300 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2 px-4"> 
          <div className="px-5 shadow-2xl rounded-3xl bg-gray-50">
            <h2 className="text-2xl py-4 border-b-2 border-red-500">Admin User Management</h2>
            <p className="py-4 px-2">The feature that allows the Admin user to observe and monitor all the users accounts and able to delete the user account and edit some information.</p>
          </div>
          <div className="flex justify-center"><img className="justify-center h-64" src={admin} alt="Admin Feature" /></div>
        </section>

        {/* <section className=" bg-yellow-100 text-center pb-24">
          <h2 className="py-5 text-3xl">Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </section> */}
      </div>
    </>
  );

};

export default Features;
