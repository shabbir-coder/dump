// src/components/TourCard.js
import React from 'react';

const TourCard = () => {
  return (
    <div className="tour-card">
      <img src="tour-image.jpg" alt="Tour" />
      <h3>Tour Title</h3>
      <p>Short description of the tour.</p>
      <button>View Details</button>
    </div>
  );
};

export default TourCard;
