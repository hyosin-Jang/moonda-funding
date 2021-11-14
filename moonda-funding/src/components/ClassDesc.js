import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px lightgrey;
  border-radius: 10px;
  width: 100%;
  margin: 7px;
  padding: 13px;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const ClassDesc = ({ name, desc }) => {
  return (
    <Wrapper>
      <Bold>클래스 소개</Bold>
      <br />
      {name}
      {desc}
    </Wrapper>
  );
};

export default ClassDesc;
