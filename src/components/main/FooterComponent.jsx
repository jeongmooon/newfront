import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #2a2a2a;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "GowunDodum-Regular";
  color: #fff;
  font-size: 15px;
`;

const MemberElement = styled.li`
  float: left;

  & + & {
    margin-left: 10px;
  }
`;

const FooterComponent = () => {
  return (
    <FooterWrap>
      <div style={{ marginBottom: "10px" }}>Team Project</div>
      <ul>
        <MemberElement>🅵김성현</MemberElement>
        <MemberElement>🅱표정문</MemberElement>
        <MemberElement>🅵남원우</MemberElement>
      </ul>
    </FooterWrap>
  );
};

export default FooterComponent;
