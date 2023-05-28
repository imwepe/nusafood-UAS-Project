import React, { useEffect, useRef } from "react";
import Map from "./Map";
import Advice from "../time/Time";
import Navbar from "./Navbar";
import Saran from "./Saran";

function Scroll() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <section>
        <div className="scroll">
          <div className="hidden">
            <h2 className="text"></h2>
          </div>
        </div>
      </section>
      <section>
        <div className="scroll">
          <div className="hidden">
            <h2 className="text">Welcome</h2>
            <h2 className="text">We proudly present</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="scroll">
          <div className="hidden">
            <h2 className="text">Virtual Indonesian Food Exhibition</h2>
          </div>
        </div>
      </section>
      <Advice />
      <Map />
    </div>
  );
}

export default Scroll;
