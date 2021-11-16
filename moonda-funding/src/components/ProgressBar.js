import React, { Component } from "react";
import styled from "styled-components";
import "../style/style.css";
import exImage from "../1.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;

const AchieveRate = styled.div`
  font-size: 10px;
  color: red;
  font-weight: bold;
  padding-bottom: 5px;
`;
const Bar = styled.div`
  border: 1px solid red;
  border-radius: 3px;
  background-color: red;
`;

const move = () => {
  let i = 0;
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("Bar");
    let width = 1;
    const frame = () => {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    };
    let id = setInterval(frame, 10);
  }
};

const ProgressBar = ({ cheerCount, goalCount }) => {
  return (
    <Wrapper>
      <AchieveRate>달성율 {(cheerCount / goalCount) * 100}%</AchieveRate>
      <div id="Progress">
        <div id="Bar" onClick={move}></div>
      </div>
    </Wrapper>
  );
};

export default ProgressBar;
