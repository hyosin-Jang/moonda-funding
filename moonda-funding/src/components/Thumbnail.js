import React from "react";
import styled from "styled-components";
import exImage from "../image/musical.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: grey;
  width: 100%;
  height: 200px;
`;

const Thumbnail = () => {
  return (
    <Wrapper>
      <img src={exImage} />
    </Wrapper>
  );
};

export default Thumbnail;
