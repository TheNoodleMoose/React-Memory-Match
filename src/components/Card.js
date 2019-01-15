import React from "react";
import styled from "styled-components";

const Card = props => {
  console.log(props.card.background);
  return (
    <CardContainer
      style={{ backgroundImage: `url("${props.card.background}")` }}
      onClick={() => props.handleClick(props.card)}
    />
  );
};

export default Card;

const CardContainer = styled.div`
  margin: 0 10px;
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 100;
  border-radius: 10px;
`;
