import React, { Component } from "react";
import styled from "styled-components";
import exImage from "../image/musical.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: grey;
  width: 100%;
  height: 200px;
`;

// 컨테이너에서 API 호출하기
// 디테일 페이지의 클래스 소개 컴포넌트

const Thumbnail = () => {
  return (
    <Wrapper>
      <img src={exImage} />
    </Wrapper>
  );
};

export default Thumbnail;
