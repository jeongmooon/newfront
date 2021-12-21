import React, { useRef } from "react";
import styled from "styled-components";

const ImageWrap = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;

const ImageBlock = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 4px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #9e9e9e;
`;

const EditImage = ({ imgURL, onChangeImage }) => {
  const inputFileRef = useRef(null);
  const onClickImg = () => {
    inputFileRef.current.click();
  };
  return (
    <ImageWrap onClick={onClickImg}>
      <ImageBlock
        style={{
          backgroundImage: imgURL ? `url(${imgURL})` : `none`,
        }}
      />
      <input
        type="file"
        hidden={true}
        name="img"
        ref={inputFileRef}
        style={{ display: "invisible" }}
        onChange={onChangeImage}
      />
    </ImageWrap>
  );
};

export default EditImage;
