import React, { Component } from "react";
import styled from "styled-components";
import CommentContainer from "../containers/CommentContainer";
const Wrapper = styled.div`
  display: flex;
  padding: 13px;
  margin: 7px;
  flex-direction: column;

  width: 100%;
  height: 60%;
`;

const Red = styled.div`
  color: red;
  font-weight: bold;
`;

const CheerComment = ({ id }) => {
  return (
    <Wrapper>
      <Red>기대 한마디</Red>
      <br />
      <CommentContainer id={id} />
    </Wrapper>
  );
};

export default CheerComment;
