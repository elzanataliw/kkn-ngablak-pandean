import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Peta1 from "../components/umkm/peta1";

export default function Peta() {
  return (
    <>
      <HtmlHead
        title="Peta Persebaran UMKM"
        decription="[insert page description]"
        link="/persebaran_umkm"
      />
      <main className="overflow-hidden">
        <Peta1 />
      </main>
    </>
  );
}