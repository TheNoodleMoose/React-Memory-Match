import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import spongebobs from "./spongebobs.json";

class App extends Component {
  state = {
    status: "Click An Image To Begin",
    score: 0,
    topScore: 0,
    cards: spongebobs
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  setGameStart = () => {
    this.setState({
      status: "Click An Image To Begin",
      cards: spongebobs,
      score: 0,
      topScore: 0
    });
  };

  setInitialState = () => {
    this.setState({
      status: "Wrong Answer! Click An Image To Try Again!",
      cards: spongebobs,
      score: 0
    });
  };
  handleItemClick = props => {
    this.shuffle(this.state.cards);

    const newArray = [...this.state.cards];
    const index = newArray.indexOf(props);

    newArray[index] = { ...props };
    if (newArray[index].clicked === false) {
      newArray[index].clicked = true;
      this.addToScore(this.state.score);
      this.setTopScore();
      this.setState({
        cards: newArray,
        status: "Correct Choice!"
      });
    } else if (newArray[index].clicked === true) {
      console.log("I Have already been clicked");
      this.setInitialState();
    }
  };

  addToScore = score => {
    score++;
    this.setState({
      score: score
    });
  };

  setTopScore = () => {
    if (this.state.topScore < 12) {
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1
        });
      }
    } else if (this.state.topScore >= 12) {
      this.setGameStart();
    }
  };

  render() {
    const { cards, score, topScore, status } = this.state;
    return (
      <div>
        <Navbar score={score} topScore={topScore} status={status} />
        <Jumbotron />
        <CardGridContainer>
          <CardGrid>
            {cards.map(card => (
              <Card
                key={card.id}
                card={card}
                handleClick={this.handleItemClick}
              />
            ))}
          </CardGrid>
        </CardGridContainer>
      </div>
    );
  }
}

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
