import React, { useState, useEffect } from "react";
import "./time.css";

function Advice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        const { advice } = data.slip;

        setAdvice(advice);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <div className="time">
      <h2 className="font-waktu">{advice}</h2>
    </div>
  );
}

export default Advice;
