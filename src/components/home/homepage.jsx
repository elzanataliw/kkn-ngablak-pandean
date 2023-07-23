import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Homepage = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen bg-homepage-cover opacity-60"></div>
      <div className="container absolute items-center w-auto top-1/2 px-12 text-basic">
        <p className="font-Montserrat text-left font-bold text-2xl mb-4 sm:text-2xl md:text-3xl lg:text-6xl">
          SELAMAT DATANG
          <br />
          DI PANDEAN
        </p>
        <p className="text-left sm:text-lg md:text-xl text-basic">
        Nikmati asrinya perkebunan dan agungnya Telomoyo di Pandean
        </p>
      </div>
    </>
  );
};

export default Homepage;
