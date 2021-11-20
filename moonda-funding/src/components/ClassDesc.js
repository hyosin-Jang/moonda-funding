import React from "react";
import styled from "styled-components";
import "../style/style.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px lightgrey;
  border-radius: 10px;
  width: 100%;
  margin: 5px;
  padding: 15px;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin: 20px;
`;

const Subtitle = styled.div`
  color: grey;
  font-size: 13px;
  line-height: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const ClassDesc = ({ name, desc, subtitle, goalCount }) => {
  return (
    <>
      <Container>
        <Name>{name}</Name>
        <Subtitle>
          {subtitle}
          <br />
          {">>"} 파트별 모집 가능
        </Subtitle>
        <div className="goal-desc">
          {" "}
          목표 응원 <span className="red">{goalCount}명</span> 달성 시 클래스
          개설!
        </div>
      </Container>
      <Wrapper>
        <Bold>클래스 소개</Bold>
        <br />
        <div className="class-desc">{desc}</div>
      </Wrapper>
    </>
  );
};

export default ClassDesc;
