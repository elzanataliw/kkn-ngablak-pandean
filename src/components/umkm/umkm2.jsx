import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Umkm2 = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen bg-homepage-cover opacity-60">
      <Link to="/peta_umkm">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-72 rounded bg-dark-green py-2 px-6 font-Montserrat text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
            >
              Lihat Lokasi UMKM
            </button>
          </Link>
      </div>
    </>
  );
};

export default Umkm2;
