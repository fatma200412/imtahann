import React from "react";
import Navbar from "../../layout/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../layout/footer";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
