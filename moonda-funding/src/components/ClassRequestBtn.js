import React, { Component } from "react";
import styled from "styled-components";
import Icon from "../image/icon.jpg";
import styles from "../style/requestButton.scss";
import classNames from "classnames/bind";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 20px;
`;

const Message = styled.div`
  color: grey;
  font-size: 13px;
`;

const Img = styled.img`
  width: 100px;
`;

const ClassRequestBtn = () => {
  const cx = classNames.bind(styles);
  return (
    <Wrapper>
      <div className={cx("request-button")}>
        <div className={cx("request-button-inside")}>
          원하는 클래스가 없나요?
          <Message>응원 클래스 직접 요청하러 가기</Message>
        </div>
        <Img src={Icon} />
      </div>
    </Wrapper>
  );
};

export default ClassRequestBtn;
