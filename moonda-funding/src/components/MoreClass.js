import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "../style/style.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 7px;
  padding: 13px;
  cursor: pointer;
`;

const MoreClass = ({ mainClassDesc }) => {
  const { mainMessage, subMessage, path } = mainClassDesc;

  console.log("m", mainClassDesc);
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(path)}>
      <div className={cx("wrapper-main")}>
        {mainMessage} {">"}{" "}
      </div>
      {subMessage.map((submessage, index) => (
        <div className={cx("wrapper-inside")} key={index}>
          {submessage}
          <br />
        </div>
      ))}
    </Wrapper>
  );
};

export default MoreClass;
