import { useState } from "react";
import { Link } from "react-router-dom";
import falcataria_moluccana from "../../assets/tanaman_gogik/falcataria_moluccana.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Sengon = () => {
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
    <div className="items-center bg-[#FFFDEC] xl:py-8 pt-4 pb-8 px-8 xl:px-24">
      <div
        className="xl:items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl">
          Sengon
          <br />
          <span className="italic">Falcataria moluccana</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={falcataria_moluccana}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Falcataria moluccana, juga dikenal sebagai pohon gamal atau albizia,
            adalah tanaman pohon cepat tumbuh yang berasal dari wilayah Asia
            Tenggara. Pohon ini memiliki daun majemuk berbentuk bulat dengan
            pola yang khas. Falcataria moluccana tumbuh tegak dengan batang yang
            lurus dan kuat. Tanaman ini sering digunakan dalam penghijauan,
            agroforestri, dan sebagai sumber kayu serbaguna. Kayu pohon gamal
            ringan, kuat, dan mudah diolah, sehingga digunakan dalam konstruksi,
            pembuatan perabot, dan bahan baku industri. Selain itu, Falcataria
            moluccana juga memiliki manfaat dalam penyerapan karbon, perbaikan
            kualitas tanah, dan peneduh.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sengon;
