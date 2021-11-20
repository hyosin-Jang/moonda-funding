import React, { Component } from "react";
import ClassContainer from "../containers/ClassContainer";
import DetailHeader from "../components/DetailHeader";
import styled from "styled-components";
import "../style/style.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpenedClass = () => {
  const OPENSTATE = "opened";
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <DetailHeader name={"목표 달성! 개설된 클래스"} />
        <Wrapper>
          <ClassContainer state={OPENSTATE} />
        </Wrapper>
      </div>
    </div>
  );
};

export default OpenedClass;
