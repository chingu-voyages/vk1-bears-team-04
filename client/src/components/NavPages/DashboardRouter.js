import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Footer,
  MainDashboard,
  FirstMenu,
  SecondMenu,
} from "./NavPages";

function DashboardRouter() {
  return (
    <section>
      <Router>
        <Navbar />
        <MainDashboard />
        <FirstMenu /> 
        <SecondMenu />  
        <Footer />
      </Router>
    </section>
  );
}

export default DashboardRouter;
