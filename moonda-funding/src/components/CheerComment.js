import React, { Component } from "react";
import styled from "styled-components";
import CommentBoard from "./CommentBoard";
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

// 컨테이너에서 API 호출하기
// 디테일 페이지의 클래스 소개 컴포넌트

const CheerComment = () => {
  return (
    <Wrapper>
      <Red>기대 한마디</Red>
      <br />
      <CommentBoard />
    </Wrapper>
  );
};

export default CheerComment;
