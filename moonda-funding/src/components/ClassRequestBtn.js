import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../icon.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px;
`;

const Button = styled.button`
  display: flex;
  background-color: white;
  border-radius: 30px;
  width: 100%;
  border: none;
  box-shadow: 5px 5px 20px lightgrey;
  padding: 5px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const Message = styled.div`
  color: grey;
  font-size: 13px;
`;

const Img = styled.img`
  width: 100px;
`;

const ClassRequestBtn = () => {
  return (
    <Wrapper>
      <Button>
        <div>
          원하는 클래스가 없나요?
          <Message>응원 클래스 직접 요청하러 가기</Message>
        </div>
        <Img src={Icon} />
      </Button>
    </Wrapper>
  );
};

export default ClassRequestBtn;
