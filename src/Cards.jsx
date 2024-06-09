import React from 'react';
import './CSS/Cards.css';

const Cards = () => {
  const cardData = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          {card}
        </div>
      ))}
    </div>
  );
};

export default Cards;
