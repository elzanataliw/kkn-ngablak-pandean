import { useState } from "react";
import { Link } from "react-router-dom";
import schima_wallichi from "../../assets/tanaman_gogik/schima_wallichi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Puspa = () => {
  const handleTNP = () => {
    const element = document.getElementById("tnp");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleKemahatv = () => {
    const element = document.getElementById("kemahatv");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleTelomoyo = () => {
    const element = document.getElementById("telomoyo");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-[#FFFDEC] pt-20 pb-12 px-8 xl:px-24">
      <div
        className="xl:items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl">
          Puspa
          <br />
          <span className="italic">Schima wallichii</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={schima_wallichi}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Schima wallichii, juga dikenal sebagai Schima atau Indian Champa,
            adalah tanaman berdaun hijau yang berasal dari wilayah Asia
            Tenggara. Tanaman ini memiliki daun berbentuk oval dan berwarna
            hijau mengilap. Bunganya yang cantik dan harum bermekaran di musim
            panas dengan warna putih atau merah muda. Schima wallichii tumbuh
            tegak dengan batang yang kuat, mencapai tinggi hingga 30 meter.
            Selain menjadi tanaman hias yang menarik, Schima wallichii juga
            memiliki manfaat sebagai pohon pelindung dan memberikan perlindungan
            bagi keanekaragaman hayati di sekitarnya. Tanaman ini juga memiliki
            nilai ekonomi sebagai kayu bernilai tinggi untuk konstruksi dan
            pengrajin kayu.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puspa;
