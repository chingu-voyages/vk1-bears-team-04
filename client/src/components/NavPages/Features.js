import React from "react";
import featureBanner from "../../images/feature-banner.svg";
import feature1 from "../../images/feature-1.svg";

const Features = () => {
  return (
    <>
      <div>
        <h1 className="px-32 text-center">This is the hero title</h1>
        <div className="flex h-2/3"> 
          <img className="max-w-full justify-center" src={featureBanner} alt="Feature" />
        </div>

        <section className="grid grid-cols-2 bg-yellow-200 gap-2 py-10 border-b-2"> 
          <div className="px-5">
            <h2 className="text-2xl">Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className="flex justify-center"><img className="justify-center h-64" src={feature1} alt="Feature1" /></div>
        </section>

        <section className="grid grid-cols-2 gap-2 py-10 border-b-2"> 
          <div className="flex justify-center"><img className="justify-center h-64" src={feature1} alt="Feature1" /></div>
          <div className="px-5">
            <h2 className="text-2xl">Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </section>

        <section className="grid grid-cols-2 bg-yellow-200 gap-2 py-10 border-b-2"> 
          <div className="px-5">
            <h2 className="text-2xl" >Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className="flex justify-center"><img className="justify-center h-64" src={feature1} alt="Feature1" /></div>
        </section>

        <section className="grid grid-cols-2 gap-2 py-10 border-b-2"> 
          <div className="flex justify-center"><img className="justify-center h-64" src={feature1} alt="Feature1" /></div>
          <div className="px-5">
            <h2 className="text-2xl">Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </section>

        <section className=" bg-red-600 text-center text-white pb-24">
          <h2 className="py-5 text-3xl">Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </section>
      </div>
    </>
  );

};

export default Features;
