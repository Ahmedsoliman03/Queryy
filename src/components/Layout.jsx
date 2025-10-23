import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout() {

  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="  py-6 dark:bg-gray-900">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}