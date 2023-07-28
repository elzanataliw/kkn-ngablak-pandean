import { useState } from "react";
import { Link } from "react-router-dom";
import coffea_sp from "../../assets/tanaman_gogik/coffea_sp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Kopi = () => {
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
          Kopi
          <br />
          <span className="italic">Coffea sp</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl max-h-[50vh] w-full"
              src={coffea_sp}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-blue text-basic p-3 rounded-lg mb-2">
              Kelas
              <br />
              Spesies
            </div>
            Coffea sp. adalah tanaman berbunga yang terkenal sebagai pohon
            penghasil biji kopi. Tanaman ini berasal dari keluarga Rubiaceae dan
            banyak ditemukan di daerah tropis di seluruh dunia. Pohon kopi
            memiliki daun hijau mengkilap dan bunganya yang kecil dan harum.
            Biji kopi yang dihasilkan oleh pohon ini biasanya digunakan untuk
            membuat minuman kopi yang populer di seluruh dunia. Proses
            pengolahan biji kopi melibatkan pemisahan biji dari buah dan
            penggongsengannya untuk menghasilkan biji kopi yang siap diseduh.
            Tanaman Coffea sp. tumbuh baik di tanah subur dan membutuhkan
            kondisi iklim yang hangat dan lembap untuk tumbuh dengan baik.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kopi;
