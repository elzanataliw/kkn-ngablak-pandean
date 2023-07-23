import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/Pendem_Landscape_A.jpg";
import gambar2 from "../../assets/agrowisata/Pendem_Landscape_B.jpg";
import gambar3 from "../../assets/agrowisata/Pendem_portrait_B.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata3 = () => {
  var settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  // return (
  //   <div className="items-center bg-basic py-8 xl:py-12 px-8 xl:px-24">
  //     <div className="">
  //       <div
  //         className="relative items-center text-light-green text-sm"
  //         data-aos="fade-down"
  //         data-aos-duration="1000"
  //       >
  //         <div className="pointer-events-none">
  //           <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
  //             <div className="font-black text-light-green font-Satisfy text-2xl sm:text-3xl xl:text-4xl text-center mb-3 xl:hidden">
  //               Liburan Bersama Keluarga di Telomoyo Nature Park
  //             </div>
  //             <p className="text-justify xl:hidden">
  //               Bosan menginap di tempat yang itu-itu saja? Ingin mencari
  //               suasana baru untuk liburan bersama keluarga?
  //               <br />
  //               Telomoyo Nature Park jawabannya!
  //             </p>
  //           </div>
  //         </div>
  //         <div className="grid grid-cols-2 xl:grid-cols-3 mt-3 gap-4 pt-4">
  //           <div className="font-black xl:col-span-2 text-light-green font-Satisfy text-2xl sm:text-3xl xl:text-4xl text-center mb-3">
  //             Liburan Bersama Keluarga di Telomoyo Nature Park
  //             <br />
  //             <div className="font-Metropolis mt-4 text-justify">
  //               Bosan menginap di tempat yang itu-itu saja? Ingin mencari
  //               suasana baru untuk liburan bersama keluarga?
  //               <br />
  //               Telomoyo Nature Park jawabannya!
  //             </div>
  //           </div>
  //           {/* <div className="col-span-1 xl:col-span-3 text-center hidden text-xl xl:flex items-center">
  //             Bosan menginap di tempat yang itu-itu saja? Ingin mencari suasana
  //             baru untuk liburan bersama keluarga?
  //             <br />
  //             Telomoyo Nature Park jawabannya!
  //           </div> */}
  //           <div className="flex justify-center items-center xl:justify-normal xl:pb-0 col-span-1 xl:col-span-1">
  //             <img className="rounded-xl" src={gambar1} alt="rectangle"></img>
  //           </div>
  //           <div className="font-black col-span-2 xl:col-span-3 xl:text-2xl text-center">
  //             Menginap di pelukan alam tidak pernah senyaman ini,
  //           </div>
  //           <div className="col-span-2 xl:col-span-3 w-full h-full justify-center flex">
  //             <iframe
  //               src="https://www.youtube.com/embed/G7KNmW9a75Y"
  //               title="YouTube video player"
  //               frameborder="0"
  //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //               allowfullscreen
  //             ></iframe>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="items-center bg-basic py-10 xl:pt-12 xl:pb-0 px-8 xl:px-24 xl:-mb-24">
      <div className="">
        <div
          className="relative items-center text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none" id="pendem">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-dark-green font-Satisfy text-2xl sm:text-3xl text-right xl:text-4xl mb-3">
              Liburan Bersama Keluarga 
                <br />
                di Telomoyo Nature Park
              </div>
              <div className="rounded-xl bg-dark-green text-justify p-3 mb-3 xl:hidden">
                <p className="text-basic font-bold">HTM 10k dan Activities start from 30k</p>
              </div>
              <p className="text-justify xl:hidden">
              Bosan menginap di tempat yang itu-itu saja? 
               Ingin mencari suasana baru untuk liburan bersama keluarga?
               Telomoyo Nature Park jawabannya!
              </p>
            </div>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-4 pt-4">
            <div className="xl:row-span-1 hidden xl:block text-xl text-justify text-dark-green">
              <div className="rounded-xl bg-dark-green text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-basic font-bold">HTM 10k dan Activities start from 30k</p>
              </div>
              <p>
               Bosan menginap di tempat yang itu-itu saja? 
               Ingin mencari suasana baru untuk liburan bersama keluarga?
               Telomoyo Nature Park jawabannya!
              </p>
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
              <img
                className="rounded-xl xl:h-3/4 w-full"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center xl:h-1/2 transform xl:pb-0 md:col-span-1 xl:col-span-1">
              <img className="rounded-xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="flex justify-center transform xl:pb-0 md:col-span-1 xl:col-span-1 items-center xl:h-1/2">
              <img className="rounded-xl" src={gambar3} alt="rectangle"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata3;
