import React, { useEffect, useState } from "react";
import CommentBoard from "../components/CommentBoard";
import axios from "axios";
// GET /class API 호출하는 container component

const CommentContainer = () => {
  // 한번만 실행
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentAPI();
  }, []);
  // 주소 변경하기

  const getCommentAPI = () => {
    axios
      .get("http://localhost:5000/comment")
      .then(res => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch(err => console.log(err));
  };

  return <CommentBoard comments={comments} />;
};

export default CommentContainer;
