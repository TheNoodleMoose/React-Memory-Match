import React from "react";
import styled from "styled-components";

export interface CardType {
  id: number;
  name: string;
  background: string;
  clicked: boolean;
}

interface CardProps {
  card: CardType;
  handleClick: (card: CardType) => void;
}

const Card: React.FC<CardProps> = ({ card, handleClick }: CardProps) => {
  return (
    <CardContainer
      src={require(`../assets/images/${card.background}`)}
      onClick={() => handleClick(card)}
    />
  );
};

export default Card;

const CardContainer = styled.img`
  margin: 0 10px;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 100;
  border-radius: 10px;
`;
