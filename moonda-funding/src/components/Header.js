import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 10px;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 2rem;
  font-size: 10px;
`;

const Header = ({ location, history }) => {
  /* TODO: 주소 값에 따라 다른 헤더 넘기기
  if (location.pathname === "/detail") {
  }
  */
  return (
    <Wrapper>
      <Logo>Moonda</Logo>
      <Button>앱 출시 알림 신청</Button>
    </Wrapper>
  );
};

export default Header;
