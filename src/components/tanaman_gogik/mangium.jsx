import { useState } from "react";
import { Link } from "react-router-dom";
import acacia_mangium from "../../assets/tanaman_gogik/acacia_mangium.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Mangium = () => {
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
          Mangium
          <br />
          <span className="italic">Acacia mangium</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={acacia_mangium}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Acacia mangium adalah tanaman pohon yang berasal dari keluarga
            Fabaceae dan ditemukan di berbagai wilayah tropis. Pohon ini
            memiliki bentuk yang indah, dengan daun majemuk berbentuk bulat dan
            batang yang tegak. Acacia mangium memiliki pertumbuhan yang cepat
            dan dapat mencapai tinggi hingga 30 meter. Daunnya berwarna hijau
            tua dan menghasilkan bunga berbentuk bola yang berwarna kuning
            cerah. Tanaman ini juga dikenal karena kegunaannya sebagai pohon
            penghasil kayu yang kuat dan tahan lama, sehingga sering digunakan
            dalam industri kayu. Acacia mangium juga memberikan manfaat
            lingkungan sebagai tanaman peneduh dan penghijauan lahan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mangium;
