import React from "react";
import styled from "styled-components";
import "../style/style.scss";
import backicon from "../image/back-icon.jpg";
import { useNavigate } from "react-router-dom";

const DetailHeader = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div className="detail-header">
      <BackIcon src={backicon} onClick={() => navigate("/")} />
      <Name>{name}</Name>
      <div> </div>
    </div>
  );
};

export default DetailHeader;

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
