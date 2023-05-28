import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/style.css";
import Jawa from "./PULAU/Jawa";
import Kalimantan from "./PULAU/Kalimantan";
import Kepulauan from "./PULAU/Kepulauan";
import Papua from "./PULAU/Papua";
import Sulawesi from "./PULAU/Sulawesi";
import Sumatera from "./PULAU/Sumatera";
import App from "./App";
import Scroll from "./components/Scroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Scroll />}></Route>
        <Route path="/jawa" element={<Jawa />}></Route>
        <Route path="/sumatera" element={<Sumatera />}></Route>
        <Route path="/kalimantan" element={<Kalimantan />}></Route>
        <Route path="/sulawesi" element={<Sulawesi />}></Route>
        <Route path="/papua" element={<Papua />}></Route>
        <Route path="/kepulauan" element={<Kepulauan />}></Route>
        <Route path="/about" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
