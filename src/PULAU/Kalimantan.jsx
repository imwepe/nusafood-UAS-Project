import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./pulau.css";

const Kalimantan = () => {
  const [active, setActive] = useState(0);

  const Food = [
    {
      name: "Soto Banjar",
      description: `Soto Banjar adalah salah satu masakan tradisional dari Kalimantan Selatan, khususnya Banjarmasin. Soto Banjar merupakan salah satu kuliner yang terkenal di Indonesia. Berbeda dengan soto lainnya di Indonesia, soto ini memiliki keunikan dalam penyajian dan cita rasanya.`,
      backgroundUrl:
        "https://www.masakapahariini.com/wp-content/uploads/2019/06/5.jpg",
    },
    {
      name: "Kerupuk Basah",
      description: `Kerupuk Basah adalah kuliner daerah khas Kalimantan Barat dan Kalimantan Tengah. Makanan ini berbahan dasar ikan sungai yang digiling kemudian dicampur tepung tapioka, serta bumbu-bumbu lain seperti bawang putih, merica, penyedap rasa, dan garam.`,
      backgroundUrl:
        "https://img-global.cpcdn.com/recipes/d61bd19aca937099/1200x630cq70/photo.jpg",
    },
    {
      name: "Choipan",
      description: `Choipan berarti kue sayur. 'Choi' artinya sayuran, dan 'pan' artinya kue. Choipan di Pontianak biasanya berbentuk panjang, berisi bengkoang dan ebi, serta ditaburi bawang putih goreng, sedangkan di Bangka Belitung berbentuk segitiga, berisi pepaya muda, dan tanpa bawang putih.`,
      backgroundUrl:
        "https://disk.mediaindonesia.com/thumbs/1800x1200/news/2022/02/e90c3ae31aad856c1d39d55d624feef9.jpg",
    },
    {
      name: "Sate Payau",
      description: `Sate payau adalah makanan khas Kutai Kartanegara yang memiliki rasa manis, gurih dan lembut teksturnya. Bahan utama sate payau adalah daging hewan buruan berupa payau (rusa).`,
      backgroundUrl:
        "https://merahputih.com/media/9e/68/98/9e68989435fd840c7e08954d0e786a9b.jpg",
    },
    {
      name: "Ketupat Kandangan",
      description: `Ketupat Kandangan berasal dari wilayah Kandangan di Kalimantan Selatan. Untuk membuat ketupat, beras adalah bahan utama. Penggunaan ikan gabus, atau haruan, sebagai pelengkap di menu Ketupat Kandangan membedakannya dari jenis ketupat lainnya. Sebelum dimasak dengan santan, ikan gabus dipanggang lebih dulu. Setelah itu, kuah dan ikan gabus disiram ke ketupat.`,
      backgroundUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/Ketupat_Kandangan_ikan_haruan.JPG",
    },
    {
      name: "Gangan Humbut",
      description: `Sayur tradisional Kalimantan, Gangan humbut, memiliki rasa manis. Pada bulan Ramadhan, hidangan ini juga sering dibeli untuk berbuka puasa. Menggunakan labu dan batang kelapa muda, khususnya humbut. Dimasak dengan ikan gabus atau, dalam istilah yang lebih umum, ikan haruan yang dipanggang di atas arang gagang humbut biasanya dimasak menjadi sayur humbut manis; itu juga bisa dibuat menjadi sambal tuha.
      `,
      backgroundUrl:
        "https://cdn2.tstatic.net/tribunnewswiki/foto/bank/images/Gangan-Humbut-1.jpg",
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

export default Kalimantan;
