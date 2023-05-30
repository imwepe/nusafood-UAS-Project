import React, { useState } from "react";
import "./pulau.css";
import Navbar from "../components/Navbar";

const Papua = () => {
  const [active, setActive] = useState(0);

  const Food = [
    {
      name: "Papeda",
      description: `Papeda merupakan makanan khas daerah Papua. 
      Papeda yang terbuat dari tepung sagu, memiliki rasa cukup tawar atau hambar.`,
      backgroundUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg/640px-Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg",
    },
    {
      name: "Aunu Senebre",
      description: `Aunu Senebre adalah makanan tradisional Papua yang terbuat dari nasi dan ikan teri.
      Aunu senebre terbuat dari bahan dasar berupa ikan teri nasi yang dicampur dengan irisan daun talas.`,
      backgroundUrl:
        "https://img.okezone.com/content/2018/02/09/298/1857358/cara-membuat-aunu-senebre-khas-papua-yang-enak-di-rumah-G7AlxL9MOV.jpg",
    },
    {
      name: "Udang Selingkuh",
      description: `Udang Selingkuh, dibuat dengan bahan utama, yaitu udang air tawar yang diambil dari sungai. Kemudian dimasak dengan sambal asam manis, saus tiram, saus padang, atau saus mentega.`,
      backgroundUrl:
        "https://cdn.idntimes.com/content-images/post/20190912/udang-selingkuh-kuliner-khas-papua-houstoniamagcom-dc460489e7c18bfee4d6892a149ba000.jpg",
    },
    {
      name: "Keladi Tumbuk",
      description: `Keladi tumbuk adalah hidangan khas masyarakat Biak, Papua.
      Sajian biasa berupa talas yang direbus kemudian ditumbuk hingga halus. Keladi tumbuk disajikan dengan sayur pakis, ikan suir asap, dan sambak.`,
      backgroundUrl:
        "https://www.goodnewsfromindonesia.id/uploads/post/large-69664091-159386661911374-4983479964992409667-n-1-84f99a7735fd556cda039138ac512db2.jpg",
    },
    {
      name: "Sate Ulat Sagu",
      description: `Satu makanan khas Papua adalah Sate Ulat Sagu. Ulat sagu dibuat dengan memotong pohon sagu, mengambil ulatnya dan membiarkan membusuk. Meskipun tampilannya menjijikkan, makanan ini mengandung banyak protein dan baik untuk penderita diabetes. Makanan rendah serat ini dapat dimakan secara langsung, digoreng, atau dijadikan sate.`,
      backgroundUrl:
        "https://merahputih.com/media/2016/02/17/7Pp1nIUOfD1455682100.png",
    },
    {
      name: "Ikan Bungkus",
      description: `Ikan bungkus adalah salah satu makanan khas Papua. Ikan bungkus Papua terkenal dengan baunya yang wangi. Itu karena daun salam ditambahkan untuk membuat campuran bumbu lebih wangi dan meresap di daging ikan. Ikan bandeng adalah jenis ikan yang paling umum digunakan. Karena dagingnya yang tidak hancur setelah diolah, ikan bandeng ini sangat cocok untuk dibungkus.`,
      backgroundUrl:
        "https://merahputih.com/media/47/c2/17/47c217d9b7e2c611677fc54698a63580.jpg",
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

export default Papua;
