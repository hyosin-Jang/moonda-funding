import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Button>
        <Message>상위 1% 튜터의 음악 & 미술 클래스! </Message>앱 출시 알림
        신청받기
      </Button>
      <Contact>
        Contact <br />
        jhshin.moonda@gmail.com <br />
        jsyang.moonda@gmail.com
      </Contact>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  bottom: 0;
  display: flex;
  height: 280px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: black;
  justify-content: center;
  margin-top: 30px;
`;

const Contact = styled.div`
  align-self: flex-start;
  color: grey;
  width: 90%;
  font-size: 13px;
  line-height: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid grey;
  margin: 20px;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 50px;
  width: 280px;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 18px;
  margin-top: 40px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Message = styled.div`
  font-size: 12px;
  color: grey;
`;
