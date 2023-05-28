import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./pulau.css";

const Sumatera = () => {
  const [active, setActive] = useState(0);

  const Food = [
    {
      name: "Nasi Padang",
      description: `Nasi padang merupakan makanan yang berasal dari Minangkabau, Sumatera Barat.
      Makanan yang berupa nasi dengan lauk-pauk berbumbu rempah. `,
      backgroundUrl:
        "https://www.rukita.co/stories/wp-content/uploads/2022/10/nasi-padang-terdekat-perkul.jpeg",
    },
    {
      name: "Mie Aceh",
      description: `Mie aceh adalah masakan mie pedas khas Aceh. 
      Mie kuning tebal dengan irisan daging sapi, atau makanan laut disajikan dalam sup sejenis kari yang gurih dan pedas.`,
      backgroundUrl:
        "https://img-global.cpcdn.com/recipes/9504cf67ccdb2eee/1200x630cq70/photo.jpg",
    },
    {
      name: "Mie Bangka",
      description: `Mie Bangka kuliner khas Belitung. 
      Mie ini adalah perpaduan Budaya Tionghoa, Belanda, Indonesia.`,
      backgroundUrl:
        "https://www.nibble.id/uploads/Mie-bangka-pesona-travel.jpg",
    },
    {
      name: "Pempek",
      description: `Pempek merupakan salah satu makanan tradisional asal Palembang, Sumatera Selatan. Makanan ini terbuat dari bahan dasar sagu dan ikan.`,
      backgroundUrl:
        "https://cdn-2.tstatic.net/jambi/foto/bank/images/resep-pempek-tanpa-ikan.jpg",
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

export default Sumatera;
