import React from "react";
import StyledCard from "./ClassCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 10px;
`;

// API로부터 어떤 정보 받을지 결정
// props 설정하기
// 목표랑, 현재 count를 받고, 달성율은 front에서 계산하자
const ex = [
  {
    no: 1,
    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  },
  {
    no: 2,

    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  },
  {
    no: 3,
    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  },
  {
    no: 4,
    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  },
  {
    no: 5,
    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  },
  {
    no: 6,
    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  },
  {
    no: 7,
    className: "최애 뮤지컬 넘버 배우기",
    desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
    cheerCount: 27,
    goalCount: 100,
    introduction:
      "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
  }
];

const ClassBoard = ({ history }) => {
  return (
    <Wrapper>
      {ex.map((classes, index) => (
        <StyledCard
          key={index}
          name={classes.className}
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
