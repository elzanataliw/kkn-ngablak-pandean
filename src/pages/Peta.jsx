import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Peta1 from "../components/peta/peta1";

export default function Peta() {
  return (
    <>
      <HtmlHead
        title="peta_umkm"
        decription="[insert page description]"
        link="/peta_umkm"
      />
      <main className="overflow-hidden">
        <Peta1 />

      </main>
    </>
  );
}