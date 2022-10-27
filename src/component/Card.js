import React, { useEffect } from "react";
import "./Card.css";
// Card.js
function Card(props) {
  return (
    <div className="card">
      <img src={props.i % 2 === 1 ? "avatar.jpeg" : "avatar.png"} alt="Avatar" />
      <div className="container">
        <h4>{props.nama}</h4>
        <p>NIM: {props.kelompok}</p>
      </div>
    </div>
  );
}
export default Card;
