import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  box-shadow: 10px 10px 5px lightgrey;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
`;

// 컨테이너에서 API 호출하기
// 디테일 페이지의 클래스 소개 컴포넌트
const ex = {
  no: 1,
  className: "최애 뮤지컬 넘버 배우기",
  desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
  cheerCount: 27,
  goalCount: 100,
  introduction:
    "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
};

const ClassDesc = () => {
  return (
    <Wrapper>
      클래스 소개
      <br />
      {ex.className}
      {ex.introduction}
    </Wrapper>
  );
};

export default ClassDesc;
