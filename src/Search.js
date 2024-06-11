import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-form-input"
            className="search-form-input"
            autoFocus="on"
          />

          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
    </div>
  );
}
