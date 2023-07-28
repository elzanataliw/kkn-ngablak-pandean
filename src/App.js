import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Agrowisata from "./pages/Agrowisata";
import Umkm from "./pages/Umkm";
import TanamanTNP from "./pages/TanamanTNP";

import Footer from "./components/footer";
import Aglaonema from "./components/tanamantnp/aglaonema";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agrowisata" element={<Agrowisata />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/agrowisata/tnp" element={<TanamanTNP />} />

        <Route path="/agrowisata/tnp/aglaonema" element={<Aglaonema />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
