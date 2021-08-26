import React from "react";
import "../assets/styles/components/Empty.scss";
import empyImage from "../assets/static/images/empty.png";

const Empty = () => (
  <div className="empty">
    <img className="empty-img" src={empyImage} alt="Rick" />
    <span className="empty-text">
      You haven&apos;t favorites.
      <br />
      Go and select you favorite characters.
    </span>
  </div>
);

export default Empty;
