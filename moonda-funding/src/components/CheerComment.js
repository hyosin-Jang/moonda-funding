import React, { Component } from "react";
import styled from "styled-components";
import CommentBoard from "./CommentBoard";
const Wrapper = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  height: 80%;
`;

// 컨테이너에서 API 호출하기
// 디테일 페이지의 클래스 소개 컴포넌트

const CheerComment = () => {
  return (
    <Wrapper>
      기대 한마디
      <br />
      <CommentBoard />
    </Wrapper>
  );
};

export default CheerComment;
