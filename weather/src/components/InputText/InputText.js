import React from "react";
import "./InputText.css";

import Search from "../../icons/search.svg";

export default function InputText() {
  return (
    <div className="input-container">
      <input
        className="input-text"
        type="text"
        placeholder="Insira aqui o nome da cidade"
      />
      <img className="input-img" src={Search} alt="Search Icon" height={34} />
    </div>
  );
}
