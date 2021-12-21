import React from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 1200px;
    margin-bottom: 100px;
  }
`;

const ItemWrapComponent = ({ ...rest }) => {
  return <ItemWrap {...rest} />;
};

export default ItemWrapComponent;
