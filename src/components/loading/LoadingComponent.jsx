import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  /* z-index: 100; */
  position: fixed;
  top: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingComponent = () => {
  return (
    <LoadingWrap>
      <ReactLoading type={"spin"} color={"#000"} />
    </LoadingWrap>
  );
};

export default LoadingComponent;
