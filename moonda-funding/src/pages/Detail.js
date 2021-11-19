import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ClassDesc from "../components/ClassDesc";
import DetailHeader from "../components/DetailHeader";
import CommentContainer from "../containers/CommentContainer";
import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import Thumbnail from "../components/Thumbnail";
import AlarmModal from "../components/AlarmModal";
import "../style/style.css";

const Detail = () => {
  const state = useLocation();
  console.log(state.state.classInfo);

  const [key, name, desc, cheerCount, goalCount, subtitle] =
    state.state.classInfo;
  console.log(key, name, desc);

  const [isAlarmModalOn, setisAlarmModalOn] = useState(false);

  const handleAlarmModal = () => {
    setisAlarmModalOn(!isAlarmModalOn);
  };

  return (
    <div className="commentBoard">
      <Wrapper>
        <DetailHeader name={name} />
        <Thumbnail />
        <ClassDesc
          name={name}
          desc={desc}
          subtitle={subtitle}
          goalCount={goalCount}
        />
        <CommentContainer id={key} />
        <ProgressBar cheerCount={cheerCount} goalCount={goalCount} />
        <Message>
          현재 {"  "} <b>{cheerCount}</b>명이 함께 응원중이에요!
        </Message>
        <AlarmButton onClick={handleAlarmModal}>
          응원하고 알림받기🔔
        </AlarmButton>
        {isAlarmModalOn && (
          <AlarmModal id={key} handleAlarmModal={handleAlarmModal} />
        )}
      </Wrapper>
    </div>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px;
  padding-bottom: 30px;
`;

const Message = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 10px;
  font-size: 13px;
`;

const AlarmButton = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: black;
  border-radius: 7px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
`;
