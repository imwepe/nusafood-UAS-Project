import React from "react";
import "./about.css";
import Navbar from "../components/Navbar";
import Elvan from "../foto/elpan.jpg";
import Khaleb from "../foto/lebby.jpg";
import Marvell from "../foto/Marvel.jpg";
import Edward from "../foto/ewa.jpg";
import Wepe from "../foto/jawir.jpg";
import Quote from "../components/Qotd";
import Location from "../components/Location";
import JokeComponent from "../components/Jokes";

function Services() {
  let message = "Tan Hana Wighna Tan Sirna";
  return (
    <section className="section-white">
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <h2 className="section-title">
              The Team Behind Marvell Production
            </h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4 flex-wrap">
            <div className="team-item">
              <img src={Marvell} className="team-img" alt="pic" />
              <h2>Marvell Christofer</h2>
              <div className="team-info">
                <p className="gelar">Calon Pemilik R15</p>
                <p className="terserah">
                  <Quote />
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 flex-wrap">
            <div className="team-item">
              <img src={Wepe} className="team-img" alt="pic" />
              <h2>William Purba</h2>
              <div className="team-info">
                <p className="gelar">Calon Danjen KOPASSUS</p>
                <p className="terserah">
                  <Quote />
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 flex-wrap">
            <div className="team-item">
              <img src={Khaleb} className="team-img" alt="pic" />
              <h2>Khaleb Andhyka</h2>
              <div className="team-info">
                <p className="gelar">Manager of Sungut Lele</p>
                <p className="terserah">
                  <Quote />
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 flex-wrap">
            <div className="team-item">
              <img src={Elvan} className="team-img" alt="pic" />
              <h2>Thomas Elvanli</h2>
              <div className="team-info">
                <p className="gelar">Kasir Roti'O Stasiun Lempuyangan</p>
                <p className="terserah">
                  <Quote />
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4 flex-wrap">
            <div className="team-item">
              <img src={Edward} className="team-img" alt="pic" />
              <h2>Edward Ferdinand</h2>
              <div className="team-info">
                <p className="gelar">Pendukung TL</p>
                <p className="terserah">
                  <Quote />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
      <JokeComponent />
    </section>
  );
}

export default Services;
