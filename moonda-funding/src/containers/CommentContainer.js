import React, { useEffect, useState } from "react";
import CommentBoard from "../components/CommentBoard";
import axios from "axios";

// 몇번째 class 인지 id 값 필요함!

const CommentContainer = ({ id }) => {
  // 한번만 실행
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentAPI();
  }, []);
  // 주소 변경하기

  const getCommentAPI = () => {
    axios
      .get(`http://localhost:5000/comment/${id}`)
      .then(res => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch(err => console.log(err));
  };

  return <CommentBoard comments={comments} />;
};

export default CommentContainer;
