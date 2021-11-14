import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

function StyledCard({ name, desc, cheerCount, goalCount }) {
  const [classInfo, setClassInfo] = useState([name, desc]);
  const [count, setCount] = useState(cheerCount);
  const navigate = useNavigate();

  const handleCheerCount = () => {
    setCount(cheerCount + 1);
  };
  return (
    <Wrapper>
      <Thumbnail />
      <Name> {name}</Name>

      <Desc>{desc}</Desc>
      <ProgressBar cheerCount={cheerCount} goalCount={goalCount} />
      <CheerButton onClick={handleCheerCount}>
        <Red>{count}명</Red> 응원중👏
      </CheerButton>
      <GotoCheerButton
        onClick={() => navigate("/detail", { state: { classInfo } })}
      >
        응원하기 {">"}
      </GotoCheerButton>
    </Wrapper>
  );
}

export default StyledCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  gap: 0.2rem;
  height: 250px;
  border-radius: 3px;
  font-size: 2rem;
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

  font-size: 15px;
`;

const Desc = styled.div`
  height: 10%;
  font-size: 10px;
  font-weight: bold;
`;

const Red = styled.span`
  color: red;
`;

const CheerButton = styled.button`
  border-radius: 10px;
  height: 5rem;
  font-weight: bold;
  background-color: white;
  font-size: 13px;
  border: none;
  box-shadow: 5px 5px 20px 0 lightgrey;
`;

const GotoCheerButton = styled.button`
  height: 1rem;
  font-weight: bold;
  border: none;
  margin-top: 5px;
  background-color: white;
  font-size: 10px;
`;
