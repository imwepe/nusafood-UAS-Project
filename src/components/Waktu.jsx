import React, { useEffect, useState } from "react";
import "./waktu.css";

const YourComponent = () => {
  const [datetime, setDatetime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://worldtimeapi.org/api/timezone/Asia/Jakarta"
        );
        const data = await response.json();
        const { datetime } = data;
        setDatetime(datetime);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setDatetime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1 className="judul-waktu">Today's date & Current Time</h1>
      {datetime ? (
        <h1 className="sub-waktu">{datetime}</h1>
      ) : (
        <p>Loading date and time...</p>
      )}
    </div>
  );
};

export default YourComponent;
