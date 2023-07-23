import { useState } from "react";
import { Link } from "react-router-dom";
import terminalia_catappa from "../../assets/tanaman_gogik/terminalia_catappa.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Ketapang = () => {
  const handlePendem = () => {
    const element = document.getElementById("pendem");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleGogik = () => {
    const element = document.getElementById("gogik");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSawit = () => {
    const element = document.getElementById("sawit");
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
          Ketapang
          <br />
          <span className="italic">Terminalia catappa</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={terminalia_catappa}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Terminalia catappa, juga dikenal sebagai pohon ketapang atau pohon
            badam, adalah tanaman hijau abadi yang berasal dari daerah tropis di
            seluruh dunia. Pohon ini memiliki daun hijau besar, bundar, dan
            rimbun. Terminalia catappa menghasilkan buah badam yang berwarna
            hijau dan kulit berdaging. Pohon ketapang sering digunakan sebagai
            pohon peneduh karena cabang dan daunnya yang lebat. Selain itu,
            pohon ini juga memiliki manfaat dalam pencegahan erosi tanah dan
            penyediaan habitat bagi keanekaragaman hayati. Kayu pohon ketapang
            digunakan dalam konstruksi dan pembuatan perabot. Tanaman ini juga
            memiliki nilai estetika yang tinggi dan menjadi pilihan populer
            sebagai tanaman hias di taman dan pekarangan.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ketapang;
