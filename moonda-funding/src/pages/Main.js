import React, { Component } from "react";
import ClassBoard from "../components/ClassBoard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Thumbnail from "../components/Thumbnail";
import styled from "styled-components";
import ClassRequestBtn from "../components/ClassRequestBtn";
import "../style/style.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const style = {
  position: "fixed",
  top: 0
};

const Main = ({ location, history }) => {
  return (
    <div className="classBoard">
      <Wrapper>
        {/* 왜 스타일 적용 안되는지 모르겠음. */}
        <Header style={style} />
        <Thumbnail />
        <ClassBoard />
        <ClassRequestBtn />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Main;
