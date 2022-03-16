import React, { useEffect, useState } from "react";
import ClassBoard from "../components/ClassBoard";
import axios from "axios";

const ThumbnailContainer = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getClassAPI();
  }, []);

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

export default ThumbnailContainer;
