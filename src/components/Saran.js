import React, { useState } from "react";

function Saran() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saran, setSaran] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      saran,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbwEK6p30qlmPw6PmJ_b9UpG6vadqb8LEPQs4u3ix0dXJQmgaPIfMLHDNNKiBcMvUEZk/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setName("");
        setEmail("");
        setSaran("");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <br />
      <h1>Saran</h1>
      <br />
      <form autoComplete="off" className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Saran</label>
        <input
          type="text"
          className="form-control"
          required
          placeholder="Enter your Saran"
          value={saran}
          onChange={(e) => setSaran(e.target.value)}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Saran;
