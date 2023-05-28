import React, { useState, useEffect } from "react";
import "./jokes.css";

function JokeComponent() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        setJoke(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="JokeComponent">
      {joke ? (
        <div>
          <h1 className="joke-ask">{joke.setup}</h1>
          <p className="joke-ans">{joke.punchline}</p>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
}

export default JokeComponent;
