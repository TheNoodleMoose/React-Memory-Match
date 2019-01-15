import React, { Component } from "react";
import styled from "styled-components";

class Jumbotron extends Component {
  render() {
    return (
      <JumbotronDiv>
        <h1>Spongebob Memory Match!</h1>
        <h3>
          Click on an the spongebobs to earn points, but be sure not to click
          the same spongebob twice!
        </h3>
      </JumbotronDiv>
    );
  }
}
export default Jumbotron;

const JumbotronDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6580b4;
  background-image: url("https://wallpapertag.com/wallpaper/full/f/d/a/379057-vertical-spongebob-background-2500x1600-computer.jpg");
  color: black;
  height: 400px;
  @media (max-width: 700px) {
    margin-top: 20px;
    height: 300px;
    width: 100%;
    font-size: 25px;
  }
`;
