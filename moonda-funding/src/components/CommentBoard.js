import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  margin: 10px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const MoreButton = styled.div`
  display: flex;
  border: 0;
  align-self: center;
  background-color: none;
  font-size: 15px;
  cursor: pointer;
`;

const Comment = styled.span`
  color: grey;
`;

const CommentBoard = ({ comments }) => {
  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible(preValue => preValue + 6);
  };

  return (
    <Wrapper>
      {comments.slice(0, visible).map((comments, index) => (
        <div key={index}>
          <Name>{comments.nickname}</Name> :{" "}
          <Comment>{comments.comment}</Comment>
          <br /> <br />
        </div>
      ))}
      <MoreButton onClick={showMoreItems}>더보기</MoreButton>
    </Wrapper>
  );
};

export default CommentBoard;
