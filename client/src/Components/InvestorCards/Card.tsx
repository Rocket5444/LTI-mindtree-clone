import React from 'react';
import './Card.css';

interface CardProps {
  title: string; 
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      {title}
    </div>
  );
};

export default Card;
