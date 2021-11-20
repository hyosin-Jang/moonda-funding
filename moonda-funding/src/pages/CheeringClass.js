import React, { Component } from "react";
import ClassContainer from "../containers/ClassContainer";
import DetailHeader from "../components/DetailHeader";
import styled from "styled-components";
import "../style/style.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheeringClass = () => {
  const CHEERSTATE = "cheering";
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <DetailHeader name={"현재 응원중인 클래스"} />
        <Wrapper>
          <ClassContainer state={CHEERSTATE} />
        </Wrapper>
      </div>
    </div>
  );
};

export default CheeringClass;
