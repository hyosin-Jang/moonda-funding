import React, { useState } from "react";
import styled from "styled-components";

const CommentBoard = ({ comments }) => {
  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible(preValue => preValue + 6);
  };

  return (
    <Wrapper>
      {comments.slice(0, visible).map((comments, index) => (
        <CommentWrapper key={index}>
          <Name>{comments.nickname}</Name> :{" "}
          <Comment>{comments.comment}</Comment>
          <br /> <br />
        </CommentWrapper>
      ))}
      <MoreButton onClick={showMoreItems}>더보기</MoreButton>
    </Wrapper>
  );
};

export default React.memo(CommentBoard);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-size: 14px;
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
  &:hover {
    text-decoration: underline;
  }
`;

const CommentWrapper = styled.div`
  padding-top: 10px;
  line-height: 20px;
`;

const Comment = styled.span`
  color: grey;
`;
