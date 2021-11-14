import React, { Component } from "react";
import styled from "styled-components";
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

const ProgressBar = ({ cheerCount, goalCount }) => {
  return (
    <Wrapper>
      <AchieveRate>달성율 {(cheerCount / goalCount) * 100}%</AchieveRate>
      <Bar />
    </Wrapper>
  );
};

export default ProgressBar;
