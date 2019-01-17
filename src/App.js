import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import spongebobs from "./spongebobs.json";

class App extends Component {
  // Define our initial state
  state = {
    status: "Click An Image To Begin",
    score: 0,
    topScore: 0,
    cards: spongebobs
  };

  // Shuffle method takes in our array of cards from the state and randomly shuffles them
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // This function resets the games state back to its initial values
  setGameStart = () => {
    this.setState({
      status: "Click An Image To Begin",
      cards: spongebobs,
      score: 0,
      topScore: 0
    });
  };

  // This method fires when the users clicks incorrectly
  setInitialState = () => {
    this.setState({
      status: "Wrong Answer! Click An Image To Try Again!",
      cards: spongebobs,
      score: 0
    });
  };
  // This method is what checks if a card has be clicked and handles
  // Which method to fire depending on what the user clicks
  handleItemClick = props => {
    // Shuffle the cards array on click
    this.shuffle(this.state.cards);

    // Make a copy of cards array so we do not mutate the state directly
    const newArray = [...this.state.cards];
    // Define a variable that is the index of our card the user clicked on from
    // Our copied array
    const index = newArray.indexOf(props);

    // Set that index to equal everything from the card the user clicked on
    newArray[index] = { ...props };
    // If that card has not be clicked on update it to clicked
    // Add to our score and update topScore
    // Set our state to the new copied array and change the status to correct choice
    if (newArray[index].clicked === false) {
      newArray[index].clicked = true;
      this.addToScore(this.state.score);
      this.setTopScore();
      this.setState({
        cards: newArray,
        status: "Correct Choice!"
      });
      // If card has already been clicked run setInitialState
    } else if (newArray[index].clicked === true) {
      console.log("I Have already been clicked");
      this.setInitialState();
    }
  };

  // Takes the the score and adds one and sets the state score to the new updated score
  addToScore = score => {
    score++;
    this.setState({
      score: score
    });
  };

  // Method that handles updating top score
  setTopScore = () => {
    // If the top score is less than tweleve
    if (this.state.topScore < 12) {
      // If the states score greater than or equal to state topscore add one
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1
        });
      }
      // If the topScore is equal to 12 reset the game because they have won
    } else if (this.state.topScore >= 12) {
      this.setGameStart();
    }
  };

  render() {
    // Object destructing from state
    const { cards, score, topScore, status } = this.state;
    return (
      <div>
        {/* Pass in score, topScore, and status to Navbar */}
        <Navbar score={score} topScore={topScore} status={status} />
        <Jumbotron />
        <CardGridContainer>
          <CardGrid>
            {/* For each card in our state cards create a Card component that is passed the card object */}
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
