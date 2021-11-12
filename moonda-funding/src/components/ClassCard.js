import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 100px;
  font-size: 10px;
  height: 200px;
  padding: 1rem;
  border-radius: 3px;
  font-size: 2rem;
  padding: 2rem;
`;

const Thumbnail = styled.div`
  height: 40%;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 3px;

  padding: 2rem;
`;
const Desc = styled.div`
  height: 10%;
  border: 1px solid black;
  font-size: 10px;
  border-radius: 3px;
`;
const AchieveRate = styled.div`
  border: 1px solid black;
  font-size: 10px;
  border-radius: 3px;
`;
const ProgressBar = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  background-color: red;
`;
const CheerButton = styled.button`
  border: 1px solid black;
  border-radius: 3px;
  font-size: 2rem;
  font-size: 10px;
`;

function StyledCard({ name, desc, cheerCount, goalCount }) {
  const [classInfo, setClassInfo] = useState([{ name: name }, { desc: desc }]);
  const [count, setCount] = useState(cheerCount);
  const navigate = useNavigate();

  const handleCheerCount = () => {
    setCount(cheerCount + 1);
  };

  return (
    <Wrapper>
      <Thumbnail />
      <Desc>{desc}</Desc>
      <AchieveRate>달성율 {(cheerCount / goalCount) * 100}%</AchieveRate>
      <ProgressBar />
      <CheerButton onClick={handleCheerCount}>{count}명 응원중</CheerButton>
      <CheerButton
        onClick={() => navigate("/detail", { state: { classInfo: classInfo } })}
      >
        응원하기
      </CheerButton>
    </Wrapper>
  );
}

export default StyledCard;
