import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ClassDesc from "../components/ClassDesc";
import Header from "../components/Header";
import CheerComment from "../components/CheerComment";
import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Thumbnail from "../components/Thumbnail";
import AlarmModal from "../components/AlarmModal";
import "../style/style.css";

const Detail = () => {
  const state = useLocation();
  console.log(state.state.classInfo);
  const [name, desc] = state.state.classInfo;
  console.log(name, desc);

  const [isAlarmModalOn, setisAlarmModalOn] = useState(false);

  const handleAlarmModal = () => {
    setisAlarmModalOn(!isAlarmModalOn);
  };

  return (
    <div className="classBoard">
      <Wrapper>
        <Header />
        <Thumbnail />
        <ClassDesc name={name} desc={desc} />
        <CheerComment />
        <ProgressBar />
        <Message>현재 27명이 함께 응원중이에요!</Message>
        <AlarmButton onClick={handleAlarmModal}>
          응원하고 알림받기🔔
        </AlarmButton>
        {isAlarmModalOn && <AlarmModal handleAlarmModal={handleAlarmModal} />}
      </Wrapper>
    </div>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Message = styled.div`
  display: flex;
  align-self: flex-start;
`;

const AlarmButton = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  font-weight: bold;
  color: white;
  background-color: black;
  border-radius: 7px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;
