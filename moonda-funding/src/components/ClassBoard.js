import React from "react";
import StyledCard from "./ClassCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(40px, 300px));
  grid-gap: 7px;
`;

const ClassBoard = ({ classes, state }) => {
  return (
    <Wrapper>
      {classes.map((classes, index) => (
        <StyledCard
          key={index}
          state={state}
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
