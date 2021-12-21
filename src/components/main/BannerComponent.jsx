import React from "react";
import styled from "styled-components";

const BannerBlock = styled.div`
  width: 100%;
  height: 30vh;
  margin-bottom: 40px;
  position: relative;
  cursor: pointer;
`;

const BannerComponent = ({ onClickBanner }) => {
  return (
    <BannerBlock onClick={onClickBanner}>
      <video
        muted
        autoPlay
        loop
        style={{
          display: "block",
          width: "100%",
          height: "30vh",
          objectFit: "cover",
          opacity: 0.4,
        }}
        onClick={() => {}}
      >
        <source
          src="https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1639963396615.mp4"
          type="video/mp4"
        />
      </video>
      <div style={{ position: "absolute", top: "45%", width: "100%" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "#fff",
            fontFamily: "KOTRA_SONGEULSSI",
            fontWeight: "bold",
          }}
        >
          뭐 마실까?
        </p>
      </div>
    </BannerBlock>
  );
};

export default BannerComponent;
