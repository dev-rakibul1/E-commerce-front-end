import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";

const RootLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayouts;
