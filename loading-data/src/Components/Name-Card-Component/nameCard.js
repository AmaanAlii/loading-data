import React from "react";
import "./nameCard.css";

function NameCard({ name, location, number }) {
  return (
    <div className="card-section">
      <div className="card-number">
        <h1>{number}</h1>
      </div>
      <div className="card-details">
        <div className="card-name">
          <strong>Name:</strong>
          <span>{name}</span>
        </div>
        <div className="card-location">
          <strong>Location:</strong>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default NameCard;
