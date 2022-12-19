import React from "react";
import "./App.css";
import Card from "./components/card";
import IntsBlog from "./components/intsblog";

function App() {
  return (
    <div className="bg">
      <div class="header">
        <a href="#default" class="logo">
          <img src="/Whinzo.png" alt="" />
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Creators</a>
          <a href="#about">My Campaign</a>
          <a href="#about">
            <img src="/VectorAvatar.jpg" alt="" />
          </a>
        </div>
      </div>

      <IntsBlog />
      <Card/>
    </div>
  );
}

export default App;
