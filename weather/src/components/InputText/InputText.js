import React, { useState, useEffect } from "react";
import "./InputText.css";

import Search from "../../icons/search.svg";

export default function InputText({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="input-container">
      <input
        className="input-text"
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Insira aqui o nome da cidade"
      />
      <img
        id="search"
        className="input-img cursor-pointer"
        src={Search}
        alt="Search Icon"
        height={34}
        onClick={() => onSearch(searchValue)}
      />
    </div>
  );
}
