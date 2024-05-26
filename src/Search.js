import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-form-input"
            className="search-form-input"
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
    </div>
  );
}
