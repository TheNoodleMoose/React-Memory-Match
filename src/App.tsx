import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card, { CardType } from "./components/Card";
import spongebobs from "./spongebobs.json";

const App: React.FC = () => {
  const [gameState, setGameState] = useState({
    status: "Click An Image To Begin",
    score: 0,
    topScore: 0,
    cards: spongebobs
  });

  const shuffle = (array: CardType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // This method is what checks if a card has be clicked and handles
  // Which method to fire depending on what the user clicks
  const handleItemClick = (card: CardType) => {
    // Shuffle the cards array on click
    shuffle(gameState.cards);

    // Make a copy of cards array so we do not mutate the state directly
    const newArray = [...gameState.cards];
    // Define a variable that is the index of our card the user clicked on from
    // Our copied array
    const index = newArray.indexOf(card);

    // Set that index to equal everything from the card the user clicked on
    newArray[index] = { ...card };
    // If that card has not been clicked on update it to clicked
    if (newArray[index].clicked === false) {
      newArray[index].clicked = true;
      const newTopScore = gameState.topScore + 1;
      // Check if current score + 1 is enough to win the game
      // If not, update the game state accordingly
      if (newTopScore < 12) {
        setGameState({
          score: score + 1,
          topScore: newTopScore <= score + 1 ? newTopScore : gameState.topScore,
          cards: newArray,
          status: "Correct Choice!"
        });
      } else {
        setGameState({
          score: 0,
          topScore: 0,
          cards: spongebobs,
          status: "Congrats, you won! Click an image to begin again"
        });
      }
      // If card has already been clicked, set game state accordingly
    } else if (newArray[index].clicked === true) {
      setGameState({
        status: "Wrong Answer! Click An Image To Try Again!",
        cards: spongebobs,
        score: 0,
        topScore: gameState.topScore
      });
    }
  };

  const { score, topScore, status, cards } = gameState;

  return (
    <div>
      {/* Pass in score, topScore, and status to Navbar */}
      <Navbar score={score} topScore={topScore} status={status} />
      <Jumbotron />
      <CardGridContainer>
        <CardGrid>
          {/* For each card in our state cards create a Card component that is passed the card object */}
          {cards.map((card) => (
            <Card key={card.id} card={card} handleClick={handleItemClick} />
          ))}
        </CardGrid>
      </CardGridContainer>
    </div>
  );
};

export default App;

const CardGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CardGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
