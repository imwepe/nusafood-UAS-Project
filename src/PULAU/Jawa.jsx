import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./pulau.css";

const Jawa = () => {
  const [active, setActive] = useState(0);

  const Food = [
    {
      name: "Soto Kudus",
      description: `Soto Kudus adalah soto tradisional yang khas berasal dari daerah Kudus, Jawa Tengah. Soto Kudus berisi suwiran ayam, taoge dan bertipe kuah bening.`,
      backgroundUrl:
        "https://www.masakapahariini.com/wp-content/uploads/2020/02/soto-kudus-7.jpg",
    },
    {
      name: "Rawon",
      description: `Rawon  merupakan  kuliner khas Jawa Timur, berupa sup daging dengan kuah berwarna hitam. Warna hitam dari kuah Rawon berasal dari buah kepayang atau sering disebut dengan kluwak.`,
      backgroundUrl:
        "https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-rawon-daging-780x440.jpg",
    },
    {
      name: "Pecel Lele",
      description: `Pecel lele merupakan makanan khas Lamongan, Jawa Timur, berupa ikan lele goreng yang disajikan bersama lalapan dan sambal. Meski namanya terdapat unsur 'pecel', namun sambal yang dipakai bukanlah sambal kacang. Melainkan sambal tomat yang rasanya pedas segar.`,
      backgroundUrl:
        "https://asset.kompas.com/crops/QT6V0LoKz42gr5uezLBcGZyBBLw=/0x0:1000x667/750x500/data/photo/2021/03/21/60569b33a2b3d.jpeg",
    },
    {
      name: "Nasi Liwet",
      description: `Nasi liwet, merupakan hidangan khas Kota Solo berupa nasi gurih yang diolah menggunakan air santan. Nasi liwet khas Kota Solo berbeda dengan nasi liwet yang berada di Jawa Barat maupun daerah lainnya. Ciri khas dari nasi liwet Kota Solo, yaitu nasi dengan bumbu gurih dan disiram dengan kuah sayur labu siam`,
      backgroundUrl:
        "https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Liwet-Sunda.jpg",
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

export default Jawa;
