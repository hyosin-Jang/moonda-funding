import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import "../style/style.css";

const AlarmModal = ({ handleAlarmModal, id }) => {
  const [phoneNum, setPhoneNum] = useState();
  const [comment, setComment] = useState();

  const getRandomNickname = () => {
    const randomNickname = [
      "핸드폰 충전 중인 반 고흐",
      "솜사탕이 먹고 싶은 모네",
      "뮤지컬이 보고 싶은 피카소",
      "배가 고픈 안보현",
      "기분 좋은 정국이"
    ];
    const randNum = Math.floor(Math.random() * randomNickname.length);
    return randomNickname[randNum];
  };

  const handlePhoneNum = e => {
    setPhoneNum(e.target.value);
  };

  const handleComment = e => {
    setComment(e.target.value);
  };

  const handlePostCommentAPI = e => {
    // 랜덤 닉네임 생성
    const nickname = getRandomNickname();
    console.log("nickname", nickname);

    const sendData = { nickname, phoneNum, comment };

    axios
      .post(`http://localhost:5000/comment/${id}`, sendData)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    // 모달 창 닫기
    handleAlarmModal();
  };
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
            onChange={handlePhoneNum}
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
            onChange={handleComment}
            required
          />
          {phoneNum && comment ? (
            <div className="button-black" onClick={handlePostCommentAPI}>
              개설돼라, 얍!
            </div>
          ) : (
            <div className="button-inactive">개설돼라, 얍!</div>
          )}
        </Modal>
      </ModalContainer>
    </Wrapper>
  );
};

export default AlarmModal;

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
