import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  bottom: 0;
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  justify-content: center;
`;

const Contact = styled.div`
  align-self: flex-start;
  color: grey;
  font-size: 8px;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 50px;
  width: 280px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 2rem;
  padding: 18px;
  margin: 40px 20px;
  font-size: 15px;
`;

const Message = styled.div`
  font-size: 10px;
  color: grey;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Button>
        <Message>상위 1% 튜터의 음악 & 미술 클래스! </Message>앱 출시 알림
        신청받기
      </Button>
      <Contact>Contact</Contact>
      <Contact>jhshin.moonda@gmail.com</Contact>
      <Contact>jsyang.moonda@gmail.com</Contact>
    </Wrapper>
  );
};

export default Footer;
