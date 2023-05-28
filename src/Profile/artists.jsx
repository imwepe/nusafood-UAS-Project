import React, { useState } from "react";
import "./index.css";

const Artists = () => {
  const [active, setActive] = useState(0);

  const artists = [
    {
      name: "Soto Kudus",
      description: `Soto Kudus adalah soto tradisional yang khas berasal dari daerah Kudus, Jawa Tengah. Soto Kudus berisi suwiran ayam, taoge dan bertipe kuah bening.`,
      backgroundUrl:
        "https://awsimages.detik.net.id/community/media/visual/2019/11/29/c1da4697-6737-4e6f-9560-31363968faea.jpeg?w=700&q=90",
    },
    {
      name: "Rawon",
      description: `Rawon  merupakan  kuliner khas Jawa Timur, berupa sup daging dengan kuah berwarna hitam. Warna hitam dari kuah Rawon berasal dari buah kepayang atau sering disebut dengan kluwak.`,
      backgroundUrl:
        "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/07/18/1838279198.jpg",
    },
    {
      name: "Pecel Lele",
      description: `Pecel lele merupakan makanan khas Lamongan, Jawa Timur, berupa ikan lele goreng yang disajikan bersama lalapan dan sambal. Meski namanya terdapat unsur 'pecel', namun sambal yang dipakai bukanlah sambal kacang. Melainkan sambal tomat yang rasanya pedas segar.`,
      backgroundUrl: "https://asset.kompas.com/crops/QT6V0LoKz42gr5uezLBcGZyBBLw=/0x0:1000x667/750x500/data/photo/2021/03/21/60569b33a2b3d.jpeg",
    },
    {
      name: "Nasi Liwet",
      description: `Nasi liwet, merupakan hidangan khas Kota Solo berupa nasi gurih yang diolah menggunakan air santan. Nasi liwet khas Kota Solo berbeda dengan nasi liwet yang berada di Jawa Barat maupun daerah lainnya. Ciri khas dari nasi liwet Kota Solo, yaitu nasi dengan bumbu gurih dan disiram dengan kuah sayur labu siam`,
      backgroundUrl:
        "https://www.masakapahariini.com/wp-content/uploads/2021/07/Nasi-Liwet-Sunda.jpg",
    },
  ];
  return (
    <div className="makanan">
      <ul>
        {artists.map((artist, i) => (
          <li
            key={i}
            style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
            role="button"
            className={active === i ? "active" : ""}
            onMouseEnter={() => setActive(i)}
          >
            <h3>{artist.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="bio">
                  <h2>{artist.name}</h2>
                  <p>{artist.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
