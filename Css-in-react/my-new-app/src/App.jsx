import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import stars from "./assets/stars.png";
import light from "./assets/type.svg.png";
import dragon from "./assets/dragon.png";
import "./App.css";
import ita from "./assets/ita.ttf";
import sss from "./assets/sss.ttf";
import mr from "./assets/mr.ttf";
import matrixbook from "./assets/matrixbook.ttf";
import matrixsmall from "./assets/matrixsmall.ttf";
import matrixsmall2 from "./assets/matrixsmall2.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ita';
    src: url(${ita}) format('truetype');
  };

  @font-face {
    font-family: 'sss';
    src: url(${sss}) format('truetype');
  };

  @font-face {
    font-family: 'mr';
    src: url(${mr}) format('truetype');
  };

  @font-face {
    font-family: 'matrixbook';
    src: url(${matrixbook}) format('truetype');
  };
  @font-face {
    font-family: 'matrixsmall';
    src: url(${matrixsmall}) format('truetype');
  };
  @font-face {
    font-family: 'matrixsmall2';
    src: url(${matrixsmall2}) format('truetype');
  }`;

const Wrapper = styled.div`
  font-family: "ita";
  font-family: "sss";
  font-family: "matrixbook";
  font-family: "matrixsmall";
  font-family: "mr";
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: solid 20px black;
  width: 500px;
  background-color: #bdaf92;
  margin: 64px;
`;

const ImgType = styled.img`
  height: 100%;
  width: auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin: 8px;
  align-items: center;
  padding: 4px;
  font-family: "matrixsmall";
  font-size: 0.45rem;
  border: solid 5px black;
  border-style: outset;
  color: black;
`;

const H = styled.div`
  font-size: 2rem;
  font-family: "mr";
`;

const Stars = styled.img`
  width: 50%;
  align-self: flex-end;
  margin: 8px;
  padding-right: 16px;
`;

const Dragon = styled.img`
  width: 85%;
  align-self: center;
  border: solid 10px black;
  border-style: outset;
  margin: 8px;
`;

const DescriptionContainer = styled.div`
  margin: 8px;
  border: solid 5px black;
  border-style: outset;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: beige;
  color: black;
`;

const Atk = styled.h3`
  align-self: flex-end;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 32px;
  font-family: "ita";
`;

const TypeName = styled.h3`
  font-size: 1rem;
  margin-bottom: 8px;
  font-family: "mr";
  display: flex;
`;

const P = styled.p`
  text-align: left;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Card>
        <Title>
          <H>DRAGON BLANC AUX YEUX BLEUX</H>
          <ImgType src={light} alt="" />
        </Title>
        <Stars src={stars} alt="" />
        <Dragon src={dragon} alt="" />
        <DescriptionContainer>
          <Description>
            <TypeName>[DRAGON/NORMAL]</TypeName>
            <P>
              Ce dragon légendaire est un puissant moteur de destuction. Rares
              sont ceux qui ont survécu à cette terrifiante créature quasiment
              invincible pour en parler.
            </P>
          </Description>
          <Atk>ATK/3000 DEF/2500</Atk>
        </DescriptionContainer>
      </Card>
    </Wrapper>
  );
}

export default App;
