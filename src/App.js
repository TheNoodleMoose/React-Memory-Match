import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards: [
      {
        id: 1,
        name: "Spongebob1",
        background:
          "https://cdn.vox-cdn.com/thumbor/lRxSbfgH5scP6a9Iv3I37xtlRGI=/0x0:1024x576/1400x1050/filters:focal(431x207:593x369):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54925923/spongebob_rainbow_meme_video_16x9.0.jpg",
        clicked: false
      },
      {
        id: 2,
        name: "Spongebob2",
        background:
          "https://vignette.wikia.nocookie.net/spongebob/images/8/89/Drifter.png/revision/latest?cb=20150728004136",
        clicked: false
      },
      {
        id: 3,
        name: "Spongebob3",
        background:
          "https://pbs.twimg.com/profile_images/736547275523166208/Ljpwa6Kg.jpg",
        clicked: false
      },
      {
        id: 4,
        name: "Spongebob4",
        background:
          "http://townsquare.media/site/252/files/2019/01/spongebob.jpg?w=980&q=75",
        clicked: false
      },
      {
        id: 5,
        name: "Spongebob5",
        background:
          "https://www.meme-arsenal.com/memes/2d20cddd91edfb01f295e22aed6a7fd5.jpg",
        clicked: false
      },
      {
        id: 6,
        name: "Spongebob6",
        background:
          "https://img.huffingtonpost.com/asset/562a91761900002d00b94c88.jpeg?ops=scalefit_720_noupscale",
        clicked: false
      },
      {
        id: 7,
        name: "Spongebob7",
        background:
          "https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg",
        clicked: false
      },
      {
        id: 8,
        name: "Spongebob8",
        background:
          "https://vignette.wikia.nocookie.net/spongebob/images/5/59/Mini_SpongeBob.png/revision/latest?cb=20120319210419",
        clicked: false
      },
      {
        id: 9,
        name: "Spongebob9",
        background:
          "https://www.rockwoodschools.org/cms/lib/PA02218971/Centricity/Domain/132/spongebobreading-400x242-1hcywc4.jpg",
        clicked: false
      },
      {
        id: 10,
        name: "Spongebob10",
        background:
          "https://i.kym-cdn.com/entries/icons/original/000/015/000/download.jpg",
        clicked: false
      },
      {
        id: 11,
        name: "Spongebob11",
        background:
          "https://static.comicvine.com/uploads/original/11118/111182429/4013761-spongebob+2.jpg",
        clicked: false
      },
      {
        id: 12,
        name: "Spongebob12",
        background: "https://i.ytimg.com/vi/T6hqx7xm_LQ/maxresdefault.jpg",
        clicked: false
      }
    ]
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  setInitialState = () => {
    this.setState({
      cards: [
        {
          id: 1,
          name: "Spongebob1",
          background:
            "https://cdn.vox-cdn.com/thumbor/lRxSbfgH5scP6a9Iv3I37xtlRGI=/0x0:1024x576/1400x1050/filters:focal(431x207:593x369):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54925923/spongebob_rainbow_meme_video_16x9.0.jpg",
          clicked: false
        },
        {
          id: 2,
          name: "Spongebob2",
          background:
            "https://vignette.wikia.nocookie.net/spongebob/images/8/89/Drifter.png/revision/latest?cb=20150728004136",
          clicked: false
        },
        {
          id: 3,
          name: "Spongebob3",
          background:
            "https://pbs.twimg.com/profile_images/736547275523166208/Ljpwa6Kg.jpg",
          clicked: false
        },
        {
          id: 4,
          name: "Spongebob4",
          background:
            "http://townsquare.media/site/252/files/2019/01/spongebob.jpg?w=980&q=75",
          clicked: false
        },
        {
          id: 5,
          name: "Spongebob5",
          background:
            "https://www.meme-arsenal.com/memes/2d20cddd91edfb01f295e22aed6a7fd5.jpg",
          clicked: false
        },
        {
          id: 6,
          name: "Spongebob6",
          background:
            "https://img.huffingtonpost.com/asset/562a91761900002d00b94c88.jpeg?ops=scalefit_720_noupscale",
          clicked: false
        },
        {
          id: 7,
          name: "Spongebob7",
          background:
            "https://studybreaks.com/wp-content/uploads/2018/12/sb1.jpg",
          clicked: false
        },
        {
          id: 8,
          name: "Spongebob8",
          background:
            "https://vignette.wikia.nocookie.net/spongebob/images/5/59/Mini_SpongeBob.png/revision/latest?cb=20120319210419",
          clicked: false
        },
        {
          id: 9,
          name: "Spongebob9",
          background:
            "https://www.rockwoodschools.org/cms/lib/PA02218971/Centricity/Domain/132/spongebobreading-400x242-1hcywc4.jpg",
          clicked: false
        },
        {
          id: 10,
          name: "Spongebob10",
          background:
            "https://i.kym-cdn.com/entries/icons/original/000/015/000/download.jpg",
          clicked: false
        },
        {
          id: 11,
          name: "Spongebob11",
          background:
            "https://static.comicvine.com/uploads/original/11118/111182429/4013761-spongebob+2.jpg",
          clicked: false
        },
        {
          id: 12,
          name: "Spongebob12",
          background: "https://i.ytimg.com/vi/T6hqx7xm_LQ/maxresdefault.jpg",
          clicked: false
        }
      ],
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
      this.setState({ cards: newArray });
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

  setTopScore = topScore => {
    if (this.state.score >= this.state.topScore) {
      this.setState({
        topScore: this.state.topScore + 1
      });
    }
  };

  render() {
    const { cards, score, topScore } = this.state;
    return (
      <div>
        <Navbar score={score} topScore={topScore} />
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
`;
