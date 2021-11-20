import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import style from "../style/style.scss";

function StyledCard({
  id,
  name,
  desc,
  cheerCount,
  goalCount,
  subtitle,
  state
}) {
  // rest 이용하기
  const [classInfo, setClassInfo] = useState([
    id,
    name,
    desc,
    cheerCount,
    goalCount,
    subtitle,
    state
  ]);
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate("/detail", { state: { classInfo } })}>
      <Thumbnail />
      <Name> {name}</Name>
      <Desc>{subtitle}</Desc>
      <Desc>{">>"}파트별 모집 가능</Desc>
      <ProgressBar cheerCount={cheerCount} goalCount={goalCount} />
      <Button state={state} cheerCount={cheerCount} />
      {state === "cheering" && (
        <GotoCheerButton>응원하기 {">"}</GotoCheerButton>
      )}
    </Wrapper>
  );
}

export default StyledCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  pointer: cursor;
  gap: 0.2rem;
  height: 280px;
  border-radius: 3px;
  font-size: 3px;
  padding: 5px;
  margin: 10px;
`;

const Thumbnail = styled.div`
  height: 70%;
  width: inherit;
  background-color: lightgrey;
`;
const Name = styled.div`
  height: 10%;
  font-weight: bold;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 15px;
`;

const Desc = styled.div`
  height: 10%;
  font-size: 12px;
  font-weight: bold;
  color: #4a4a4a;
`;

const GotoCheerButton = styled.button`
  height: 1rem;
  font-weight: bold;
  border: none;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0);
  font-size: 12px;
`;
