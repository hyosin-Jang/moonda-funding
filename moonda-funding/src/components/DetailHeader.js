import React from "react";
import styled from "styled-components";
import "../style/style.scss";
import backicon from "../image/back-icon.jpg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  padding: 8px;
  height: 50px;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  font-weight: bold;
  justify-content: space-between;
`;

const BackIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const DetailHeader = ({ name }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <BackIcon src={backicon} onClick={() => navigate("/")} />
      <Name>{name}</Name>
      <div></div>
    </Wrapper>
  );
};

export default DetailHeader;
