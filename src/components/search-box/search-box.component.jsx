import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handlerChange }) => (
  <input
  //This is HTML thats why we use curly brackets. 
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlerChange}
  />
);
