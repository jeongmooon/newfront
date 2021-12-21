import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { useNavigate } from "react-router-dom";

const NavbarBlock = styled.div`
  padding: 1rem 0;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 999;
  background: #fff;
`;

const NavbarWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  line-height: 40px;

  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
  }
`;

const NavbarLogo = styled.img`
  width: 5rem;
`;

const SearchInput = styled.input`
  width: 100px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  box-sizing: border-box;
`;

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div
          className="left"
          style={{
            fontFamily: "KOTRA_SONGEULSSI",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        >
          {/* <img
            style={{ height: "40px" }}
            src="https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1639732022219.png"
            alt="LOGO"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
            }}
          /> */}
          칵테일파인더
        </div>
        <div className="right"></div>
      </NavbarWrapper>
    </NavbarBlock>
  );
};

export default NavbarComponent;
