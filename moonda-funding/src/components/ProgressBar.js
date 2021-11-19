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
  color: red;
  font-weight: bold;
  padding-bottom: 5px;
`;

const ProgressBar = ({ cheerCount, goalCount }) => {
  let achieveRate = Math.floor((cheerCount / goalCount) * 100);

  if (achieveRate >= 100) {
    achieveRate = 100;
  }
  const style = {
    width: `${achieveRate}%`,
    height: "5px",
    backgroundColor: "red"
  };

  return (
    <Wrapper>
      <AchieveRate>달성율 {achieveRate}%</AchieveRate>
      <div id="Progress">
        <div id="Bar" style={style}></div>
      </div>
    </Wrapper>
  );
};

export default ProgressBar;
