import React from "react";
import styled from "styled-components";

const LoginComponent = () => {
  return (
    <>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>로그인</button>
    </>
  );
};

export default LoginComponent;
