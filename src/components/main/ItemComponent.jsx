import React from "react";
import styled from "styled-components";

const CoktailItem = styled.div`
  font-family: 'KOTRA_SONGEULSSI';
  width: 175px;
  height: 175px;
  margin: 0.5rem;
  border-radius: 5px;
  position: relative;
  background-size: cover;
  background-image: ${(props) =>
    props.imgURL
      ? `url(${props.imgURL})`
      : `url("https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1639733002599.png")`};
  }
  ::before {
    content: "";
    opacity: 0.5;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: #000;
  }

  @media only screen and (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const CoktailTitle = styled.p`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  line-height: 175px;
  position: relative;

  @media only screen and (min-width: 768px) {
    line-height: 250px;
  }
`;

const ItemComponent = ({ data, onClickItem }) => {
  const { _id, coktailName, imgURL } = data;
  return (
    <CoktailItem imgURL={imgURL} onClick={() => onClickItem(_id)}>
      <CoktailTitle>{coktailName}</CoktailTitle>
    </CoktailItem>
  );
};

export default ItemComponent;
