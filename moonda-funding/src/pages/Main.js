import React from "react";
import ClassContainer from "../containers/ClassContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Thumbnail from "../components/Thumbnail";
import MoreClass from "../components/MoreClass";
import styled from "styled-components";
import ClassRequestBtn from "../components/ClassRequestBtn";
import "../style/style.scss";

const Main = () => {
  const mainClassDesc = {
    mainMessage: "이 클래스 어때요?",
    subMessage: [
      "여러분이 듣고 싶은 클래스를 응원해주세요.",
      "클래스가 개설되면 알려드립니다. 여러분을 위한 클래스를 즐겨보세요!"
    ],
    path: "/allclass"
  };

  const openClassDesc = {
    mainMessage: "개설 완료!",
    subMessage: ["여러분의 응원 덕분에 현재 개설되어 진행된 클래스입니다."],
    path: "/openclass"
  };

  const CHEERSTATE = "cheering";
  const OPENSTATE = "opened";

  return (
    <div className="main-wrapper">
      <div className="main-container">
        <Header />
        <Thumbnail />
        <MoreClass mainClassDesc={mainClassDesc} />
        <ClassContainer state={CHEERSTATE} />
        <ClassRequestBtn />
        <MoreClass mainClassDesc={openClassDesc} />
        <ClassContainer state={OPENSTATE} />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
