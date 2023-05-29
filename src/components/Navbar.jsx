import React from "react";
import "./stylenav.css";
import LoginWeb from "../Login";

const Navbar = () => {
  return (
    <div className="nav">
      <h2 class="logo">
        <a href="/">nusafood</a>
      </h2>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a href="" id="logo" class="navbar-brand">
            <img src="gambar/web-development.png" class="img-fluid" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item1"></li>
              <li class="nav-item">
                <a href="/" class="nav-link" aria-current="page">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="/about" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="/about" class="nav-link">
                  Our Location
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
