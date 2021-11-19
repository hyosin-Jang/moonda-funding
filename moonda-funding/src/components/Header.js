import React, { Component } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import logo from "../logo.jpg";
const Wrapper = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  padding: 8px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  font-size: 20px;
  width: 100px;
  cursor: pointer;
  height: 30px;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 25px;
  cursor: pointer;
  background-color: black;
  color: white;
  width: 120px;
  padding: 7px;
  font-size: 11px;
`;

const Header = ({ location, history }) => {
  /* TODO: 주소 값에 따라 다른 헤더 넘기기
  if (location.pathname === "/detail") {
  }
  */
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo src={logo} onClick={() => navigate("/")} />
      <Button>앱 출시 알림 신청</Button>
    </Wrapper>
  );
};

export default Header;
