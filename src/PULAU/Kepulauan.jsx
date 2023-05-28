import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./pulau.css";

const Kepulauan = () => {
  const [active, setActive] = useState(0);

  const Food = [
    {
      name: "Ayam Betutu",
      description: `Ayam betutu merupakan makanan khas Bali, terbuat dari daging ayam utuh dan dimasak dengan bumbu base genep.
      Ayam Betutu dimasak dengan bumbu betutu, yaitu bumbu khas Bali.`,
      backgroundUrl:
        "https://awsimages.detik.net.id/community/media/visual/2021/08/27/resep-ayam-betutu-gilimanuk_43.jpeg?w=1200",
    },
    {
      name: "Nasi Campur",
      description: `Nasi campur terdiri dari berbagai macam komponen seperti nasi putih, sate lilit, ayam suwir bumbu genep, urap, sambal matah, dan beberapa komponen lainnya.`,
      backgroundUrl:
        "https://img-global.cpcdn.com/recipes/6306149adfc3e0b1/680x482cq70/nasi-campur-bali-foto-resep-utama.jpg",
    },
    {
      name: "Nasi Lapola",
      description: `Nasi Lapola adalah kuliner tradisional khas Maluku Utara.
      Makanan tersebut merupakan kombinasi antara nasi dan kacang tolo.`,
      backgroundUrl:
        "https://img-global.cpcdn.com/recipes/d6eb7a6425130891/680x482cq70/nasi-lapola-khas-ambon-foto-resep-utama.jpg",
    },
    {
      name: "Roti Kompiang",
      description: `Roti Kompiang merupakan roti khas Flores yang berbentuk bulat atau oval. Kompyang merupakan sejenis roti dari tepung terigu dengan tekstur kering.`,
      backgroundUrl:
        "https://sampaijauh.com/wp-content/uploads/2022/08/roti-kompiang.jpeg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="makanan">
        <ul>
          {Food.map((Food, i) => (
            <li
              key={i}
              style={{ backgroundImage: `url(${Food.backgroundUrl})` }}
              role="button"
              className={active === i ? "active" : ""}
              onMouseEnter={() => setActive(i)}
            >
              <h3>{Food.name}</h3>
              <div className="section-content">
                <div className="inner">
                  <div className="bio">
                    <h2>{Food.name}</h2>
                    <p>{Food.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Kepulauan;
