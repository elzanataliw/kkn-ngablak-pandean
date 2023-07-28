import { Link } from "react-router-dom";

import { HtmlHead } from "../components/HtmlHead";
import Aglaonema from "../components/tanamantnp/aglaonema";
import Anthurium from "../components/tanamantnp/anthurium";
import Araukaria from "../components/tanamantnp/araukaria";
import Bambukuning from "../components/tanamantnp/bambukuning";
import Maranta from "../components/tanamantnp/maranta";
import Miyana from "../components/tanamantnp/miyana";
import Nangka from "../components/tanamantnp/nangka";

export default function TanamanTNP() {
  return (
    <>
      <HtmlHead
        title="tnp"
        decription="[insert page description]"
        link="/agrowisata/tnp"
      />
      <main className="overflow-hidden">
        <Aglaonema />
        <Anthurium />
        <Araukaria />
        <Bambukuning/>
        <Maranta />
        <Miyana />
        <Nangka />



      </main>
    </>
  );
}
