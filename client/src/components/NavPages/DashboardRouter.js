import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Footer,
  Dashboard,
  Account,
  Maps,
  Hotlines,
} from "./NavPages";

function DashboardRouter() {
  return (
    <section>
      <Router>
        <Navbar />
        <Dashboard />
        <Account />
        <Maps /> 
        <Hotlines />  
        <Footer />
      </Router>
    </section>
  );
}

export default DashboardRouter;
