import React, { useEffect, useState } from "react";
import ClassBoard from "../components/ClassBoard";
import axios from "axios";

const ClassContainer = ({ state }) => {
  // 한번만 실행
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getClassAPI();
  }, []);

  const getClassAPI = () => {
    axios
      .get(`http://localhost:5000/class/${state}`)
      .then(res => {
        console.log(res.data);
        setClasses(res.data);
      })
      .catch(err => console.log(err));
  };

  return <ClassBoard classes={classes} state={state} />;
};

export default ClassContainer;
