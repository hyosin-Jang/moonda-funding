import React from "react";
import ClassDesc from "../components/ClassDesc";
import Header from "../components/Header";
import CheerComment from "../components/CheerComment";
import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Thumbnail from "../components/Thumbnail";
import "../style/style.css";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const AlarmButton = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  color: white;
  background-color: black;
  border-radius: 7px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;

const Detail = () => {
  return (
    <div className="classBoard">
      <Wrapper>
        <Header />
        <Thumbnail />
        <ClassDesc />
        <CheerComment />
        <ProgressBar />
        <AlarmButton>응원하고 알림받기🔔</AlarmButton>
      </Wrapper>
    </div>
  );
};

export default Detail;
