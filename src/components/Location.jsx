import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="kotak">
      <h1 className="dibuat">Made With Passion In</h1>
      <div className="lokasi" id="lokasi">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0537532007806!2d106.61577481086867!3d-6.256649493705721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc7adc2d131f%3A0x6ff6447e57662941!2sGedung%20B%2C%20Kampus%20Universitas%20Multimedia%20Nusantara!5e0!3m2!1sid!2sid!4v1685286816038!5m2!1sid!2sid"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
