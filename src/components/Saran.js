import React, { useState } from "react";
import "./saran.css";

function Saran() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwryI4bq5LcwKDccNkZ8Bkhz7CksI9xVjt0PyfLvdhxMphCVKb6IVPdeVW8KDO4QVNE/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1 className="judul-contact">Messages for Us</h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input
            className="input-1"
            placeholder="Name"
            name="Name"
            type="text"
          />
          <input
            className="input-2"
            placeholder="Email"
            name="Email"
            type="text"
          />
          <input
            className="input-3"
            placeholder="Message"
            name="Message"
            type="text"
          />
          <input className="btn" name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Saran;
