import React, { useState, useEffect } from "react";
import "./qotd.css";

function Quote() {
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
    <div className="kwot">
      <h2 className="kwot2">{advice}</h2>
    </div>
  );
}

export default Quote;
