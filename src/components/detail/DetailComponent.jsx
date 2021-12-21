import React, { useState } from "react";
import styled from "styled-components";
import DeletButtonComponets from "../delete/DeletButtonComponets";
import ChartComponent from "./chart/ChartComponent";

const DetailBlock = styled.div`
  max-width: 700px;
  margin: 0 auto;
  height: auto;
`;

const CoktailImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ChartWrap = styled.div`
  width: 100%;
`;

const CoktailTitle = styled.h2`
  font-family: "KOTRA_SONGEULSSI";
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
`;

const DetailComponent = ({ data, isAdminLogined }) => {
  const {
    _id,
    category,
    coktailName,
    cocktailContent,
    alcoholDegree,
    bitter,
    sour,
    imgURL,
    kind,
    sweet,
    perifume,
    sauceKind,
  } = data;
  console.log(data);
  console.log(kind);
  return (
    <>
      <DetailBlock>
        <CoktailImg src={imgURL} style={{ width: "100%" }} />
        <CoktailTitle>{coktailName}</CoktailTitle>
        <ChartWrap>
          <ChartComponent data={data} />
        </ChartWrap>
        <div
          style={{
            width: "85%",
            height: "auto",
            margin: "50px auto",
            fontSize: "12px",
            fontFamily: "GowunDodum-Regular",
          }}
        >
          <hr />
          <br />
          🍸 들어간 술 : {kind} <br /> <br />
          🍹 추가 재료 : {sauceKind} <br /> <br />
          <hr />
          <br />
          <div dangerouslySetInnerHTML={{ __html: cocktailContent }} />
        </div>
      </DetailBlock>
      {isAdminLogined ? <DeletButtonComponets _id={_id} /> : ""}
    </>
  );
};

export default DetailComponent;
