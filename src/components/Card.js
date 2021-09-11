import React from "react";
import styled from "styled-components";
const Card = (props) => {
  const { card, handleClick } = props;
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
