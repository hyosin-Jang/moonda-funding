import React from "react";
import styles from "../style/style.scss";
import classNames from "classnames/bind";
import styled from "styled-components";
const cx = classNames.bind(styles);

const Button = ({ state, cheerCount }) => {
  return (
    <>
      {state === "cheering" ? (
        <div className={cx("cheer-button")}>
          <Red>{cheerCount}명</Red> &nbsp;응원중👏
        </div>
      ) : (
        <div className={cx("open-button")}>{cheerCount}명 응원함🎉</div>
      )}
    </>
  );
};

const Red = styled.span`
  color: red;
`;

export default Button;
