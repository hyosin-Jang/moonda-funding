import React, { useState } from "react";
import StyledCard from "./ClassCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 300px));
  grid-gap: 8px;
`;

// API로부터 어떤 정보 받을지 결정
// props 설정하기
// 목표랑, 현재 count를 받고, 달성율은 front에서 계산하자

const ClassBoard = ({ classes }) => {
  return (
    <Wrapper>
      {classes.map((classes, index) => (
        <StyledCard
          key={index}
          id={classes.id}
          name={classes.className}
          subtitle={classes.subtitle}
          desc={classes.desc}
          cheerCount={classes.cheerCount}
          goalCount={classes.goalCount}
          introduction={classes.introduction}
        />
      ))}
    </Wrapper>
  );
};

export default ClassBoard;
