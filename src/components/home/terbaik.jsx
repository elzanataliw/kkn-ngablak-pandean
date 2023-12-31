import { useState, React, Component } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/home/terbaik/terbaik1.jpg";
import gambar2 from "../../assets/home/terbaik/terbaik2.jpg";
import gambar3 from "../../assets/home/terbaik/terbaik3.jpg";
import gambar4 from "../../assets/home/terbaik/terbaik4.jpg";
import gambar5 from "../../assets/home/terbaik/terbaik5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Terbaik = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  // const translateLogo = {
  // 	transform: isDesktop ? "translate(30%, 0%)" : "translate(0%, 0%)",
  // };
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
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

  return (
    <div className="items-center bg-basic pb-16 pt-6 xl:pt-10 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-dark-green  font-Satisfy text-2xl xl:text-4xl font-bold mb-1 text-center">
                Terbaik dari Pandean
              </div>
            </div>
          </div>
          <div className="text-dark-green  sm:text-base xl:text-xl text-center mb-10 xl:mb-4">
          Mari nikmati akhir pekan santai dengan suasana asri dan sejuk dari pesona alam Telomoyo dan perkebunan yang indah.
          </div>
          <Slider {...settings} className="cursor-pointer">
            <div className="px-4">
              <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar3} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar4} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar5} alt="rectangle"></img>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Terbaik;
