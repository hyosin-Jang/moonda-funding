import React, { Component } from "react";
import styled from "styled-components";
import exImage from "../1.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
  width: 100%;
  height: 20px;
  border-radius: 10px;
`;

const ProgressBar = () => {
  return <Wrapper>달성율</Wrapper>;
};

export default ProgressBar;
