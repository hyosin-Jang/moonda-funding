import React, { useEffect, useState } from "react";
import ClassBoard from "../components/ClassBoard";
import axios from "axios";
// GET /class API 호출하는 container component

const ClassContainer = () => {
  // 한번만 실행
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getClassAPI();
  }, []);
  // 주소 변경하기

  const getClassAPI = () => {
    axios
      .get("http://localhost:5000/class")
      .then(res => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch(err => console.log(err));
  };

  return <ClassBoard classes={classes} />;
};

export default ClassContainer;
