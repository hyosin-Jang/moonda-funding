import React, { Component } from "react";
import styled from "styled-components";
import "../style/style.css";

const Wrapper = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background #00000080;
  z-index: 10000;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 25%;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  padding: 40px 20px 10px 20px;
`;

const Bold = styled.div`
  font-weight: bold;
`;

const PhoneInput = styled.input`
  width: 90%;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  border: 1px solid lightgrey;
`;
const CommentInput = styled.textarea`
  width: 90%;
  height: 100px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid lightgrey;
`;

const AlarmModal = ({ handleAlarmModal }) => {
  return (
    <Wrapper onClick={handleAlarmModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <Modal>
          <div>클래스가 개설되면 문자로 알려드려요! </div>
          <PhoneInput
            id="phoneNumber"
            required
            placeholder="전화번호 입력('-'없이 번호만)"
            type="text"
          />
          <div className="message">
            입력하신 전화번호는 클래스 개설 시 알림 용도로만 사용되며, 이후에는
            파기됩니다.
          </div>
          <div>기대평 한마디만 남겨주세요😊 </div>
          <CommentInput
            id="comment"
            placeholder="예시)
            와 내 인생 뮤지컬인데.. 꼬오옥 배우고 싶어요!"
          />
          <div className="button-black">개설돼라, 얍!</div>
        </Modal>
      </ModalContainer>
    </Wrapper>
  );
};

export default AlarmModal;
