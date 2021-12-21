import React from "react";
import MainContainer from "../containers/main/MainContainer";
const MainPage = ({ loading, coktailData, setItemId, randomCoktail }) => {
  return (
    <>
      <MainContainer
        loading={loading}
        coktailData={coktailData}
        setItemId={setItemId}
        randomCoktail={randomCoktail}
      />
    </>
  );
};

export default MainPage;
