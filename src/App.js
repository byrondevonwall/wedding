import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import HeroImage from './website-hero.jpg';

const Main = styled.main`
  background-image: url(${HeroImage});
  background-size: cover;
  background-clip: border-box;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background: cover no-repeat;
`;

const Body = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 32px;
  box-sizing: border-box;
  @media screen and (max-width: 760px) {
    padding: 8px;
    height: 80vh;
    justify-content: center;
    align-items: flex-end;
  }
`;

const InfoWrap = styled.div`
  color: #fff;
  font-family: sans-serif;
  border: 6px solid #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  @media screen and (max-width: 760px) {
    justify-content: center;
    align-items: center;
  }
`;

const DateContainer = styled.div`
  font-weight: 400;
  font-size: 4em;
  padding: 0;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  align-self: flex-end;
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Body>
          <InfoWrap>
            <DateContainer>6/16/18</DateContainer>
            <InfoContainer>Durham, NC</InfoContainer>
          </InfoWrap>
        </Body>
      </Main>
    );
  }
}

export default App;
