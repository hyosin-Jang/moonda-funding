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
  bottom: 0;
  align-self: flex-start;
  color: grey;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-size: 2rem;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Button>앱 출시 알림 신청받기</Button>
      <Contact>Contact</Contact>
      <Contact>jhshin.moonda@gmail.com</Contact>
      <Contact>jsyang.moonda@gmail.com</Contact>
    </Wrapper>
  );
};

export default Footer;
