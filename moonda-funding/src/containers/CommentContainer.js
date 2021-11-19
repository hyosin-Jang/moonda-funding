import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentBoard from "../components/CommentBoard";
import axios from "axios";

const CommentContainer = ({ id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentAPI();
  }, []);

  const getCommentAPI = () => {
    axios
      .get(`http://localhost:5000/comment/${id}`)
      .then(res => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <Wrapper>
      <Red>기대 한마디</Red>
      <br />
      <CommentBoard comments={comments} />
    </Wrapper>
  );
};

export default CommentContainer;

const Wrapper = styled.div`
  display: flex;
  padding: 13px;
  margin: 7px;
  width: 100%;
  flex-direction: column;
`;

const Red = styled.div`
  color: red;
  font-weight: bold;
`;
