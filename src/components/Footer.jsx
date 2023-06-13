import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>

      <div className="credit">
        <p>
          created by <a href="">Marvell Production</a>. | &copy; 2023.
        </p>
      </div>

      <div className="last">
        <h1>
          <a href="/">NUSAFOOD</a>
        </h1>
      </div>
    </div>
  );
};
export default Footer;
