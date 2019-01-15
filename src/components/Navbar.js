import React from "react";
import styled from "styled-components";

const Navbar = props => {
  return (
    <NavBar>
      <NavbarContainer>
        <NavbarItem>Clicky Game</NavbarItem>
        <NavbarItem>{props.status}</NavbarItem>
        <NavbarItem>
          Score: {props.score} | Top Score: {props.topScore}
        </NavbarItem>
      </NavbarContainer>
    </NavBar>
  );
};

export default Navbar;

const NavbarItem = styled.h3`
  color: white;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const NavbarContainer = styled.div`
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #282c34;
  min-height: 60px;
  color: white;
  font-size: calc(10px + 2vmin);
`;

const NavBar = styled.div`
  width: 100%;
  position: fixed;
  text-align: center;
  top: 0;
  @media (max-width: 700px) {
    height: 10px;
  }
`;
