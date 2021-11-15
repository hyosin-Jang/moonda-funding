import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const Comment = styled.span`
  color: grey;
`;

const ex = [
  {
    id: 0,
    nickname: "솜사탕이 먹고 싶은 모네",
    comment: "헐 제 인생 뮤지컬 넘버를 이렇게 배울 수 있다니...!!"
  },
  {
    id: 1,
    nickname: "핸드폰 충전 중인 반 고흐",
    comment:
      "항상 뮤지컬에 대해 어렵다 생각하고 도전도 안해봤는데.. 좋은 기회가 될 것 같아요"
  }
];

const CommentBoard = ({ comments }) => {
  return (
    <Wrapper>
      {comments.map((comments, index) => (
        <div key={index}>
          <Name>{comments.nickname}</Name> :
          <Comment>{comments.comment}</Comment>
          <br /> <br />
        </div>
      ))}
    </Wrapper>
  );
};

export default CommentBoard;
