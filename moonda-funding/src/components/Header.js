import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../style/style.scss";
import logo from "../image/logo.jpg";

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  position: fixed;
  top: 0;
  width: inherit;
  height: 50px;
  background-color: white;
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

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo src={logo} onClick={() => navigate("/")} />
      <Button>앱 출시 알림 신청</Button>
    </Wrapper>
  );
};

export default Header;
