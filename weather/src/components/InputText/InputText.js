import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";

export default function InputText({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative">
      <input
        className="h-12 w-96 pl-5 text-xl"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Insira aqui o nome da cidade"
      />
      <div
        className="absolute top-4 right-5 cursor-pointer"
        onClick={() => onSearch(searchValue)}
      >
        <VscSearch />
      </div>
    </div>
  );
}
