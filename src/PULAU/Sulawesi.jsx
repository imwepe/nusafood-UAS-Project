import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./pulau.css";

const Sulawesi = () => {
  const [active, setActive] = useState(0);

  const Food = [
    {
      name: "Coto Makassar",
      description: `Coto Makassar adalah salah satu makanan khas Sulawesi Selatan, tepatnya dari daerah Makassar. Coto Makassar terlihat seperti sup daging sapi tapi memiliki bumbu rempah beraneka rupa.`,
      backgroundUrl:
        "https://asset.kompas.com/crops/ljY1r3f3HJaNEuLip3iARQOaK-E=/0x1226:3000x3226/750x500/data/photo/2021/06/11/60c2acf88c6f0.jpg",
    },
    {
      name: "Kapurung",
      description: `Kapurung adalah makanan yang populer di Sulawesi Selatan. 
      Kapurung berupa bulatan-bulatan kecil yang dimasukkan ke dalam kuah yang telah dibumbui dengaan rempah dan sayur-sayuran.`,
      backgroundUrl:
        "https://resepkoki.id/wp-content/uploads/2018/01/Resep-Kapurung.jpg",
    },
    {
      name: "Bassang",
      description: `Bassang adalah makanan sejenis bubur yang dibuat dari jagung pulut, tepung terigu, air, gula dan garam.
      Makanan ini enak dihidangkan saat kondisi masih panas.`,
      backgroundUrl:
        "https://img-global.cpcdn.com/recipes/29c3c4e23068b0ab/1200x630cq70/photo.jpg",
    },
    {
      name: "Buras",
      description: `Buras memiliki bentuk seperti lontong, dengan bahan dasar beras. 
      Buras memiliki rasa yang gurih dan kerap disajikan sebagai makanan pendamping makanan berkuah seperti bakso, sup konro ataupun coto Makassar.`,
      backgroundUrl:
        "https://www.masakapahariini.com/wp-content/uploads/2022/06/resep-buras.jpg",
    },
    {
      name: "Tinutuan",
      description: `Salah satu makanan khas Manado, Sulawesi Utara, adalah Tinutuan, juga dikenal sebagai Bubur Manado. Tinutuan dapat digunakan sebagai makanan pergaulan antar kelompok masyarakat di Manado karena merupakan campuran berbagai macam sayuran yang tidak mengandung daging. Sarapan pagi biasanya terdiri dari Tinutuan dan berbagai hidangan lainnya.`,
      backgroundUrl:
        "https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-1990956131-fdca6077e61fa78ac4eed782fdd86070.jpg",
    },
    {
      name: "Sup Konro",
      description: `Sup Konro adalah masakan Makassar tradisional. Biasanya, daging sapi atau iga sapi digunakan untuk membuat Sup Konro. Dengan menggunakan ketumbar, bumbunya relatif "kuat". Kombinasi rempah-rempah, termasuk ketumbar, keluwak, sedikit pala, kunyit, kencur, kayu manis, asam, daun lemon, cengkih, dan daun salam, memberikan rasa pedas dan berbumbu ini.`,
      backgroundUrl:
        "https://asset.kompas.com/crops/t9vL2Z6ZAjt7cnpl05cuYOfd2k4=/129x72:651x420/750x500/data/photo/2020/07/30/5f22636a0e7e0.jpg",
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

export default Sulawesi;
