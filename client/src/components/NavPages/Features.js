import React from "react";
import styled from 'styled-components';
import featureBanner from "../../images/feature-banner.svg";
import feature1 from "../../images/feature-1.svg";
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

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2"> 
          <div className="px-5">
            <h2 className="text-2xl">Crowdsourcing</h2>
            <p>Crowdsource is collecting of information and datas from a group of people or an individual. U Rescue Me web app has the feature that collects important details that helps the rescuers for the rescue and search operation by gathering datas from the form filled up by the users.</p>
          </div>
          <div className="flex justify-center"><img className="justify-center h-64" src={crowdsource} alt="Crowdsource Feature Image" /></div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2"> 
          <div className="flex justify-center"><img className="justify-center h-64" src={map} alt="Map Location Feature Image" /></div>
          <div className="px-5">
            <h2 className="text-2xl">Map Location</h2>
            <p>Uses maps can be a guide and also to determine specific location for the users and community to observe and locate where the rescue operations can happen</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2"> 
          <div className="px-5">
            <h2 className="text-2xl" >Admin User Management</h2>
            <p>This feature allows Admin user to observe and monitor all the users accounts and able to delete the user account and edit some information.</p>
          </div>
          <div className="flex justify-center"><img className="justify-center h-64" src={admin} alt="Admin Feature Image" /></div>
        </section>

        {/* <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2 py-10 border-t-2 border-b-2"> 
          <div className="flex justify-center"><img className="justify-center h-64" src={feature1} alt="Feature1" /></div>
          <div className="px-5">
            <h2 className="text-2xl">Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </section> */}

        {/* <section className=" bg-yellow-100 text-center pb-24">
          <h2 className="py-5 text-3xl">Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </section> */}
      </div>
    </>
  );

};

export default Features;
