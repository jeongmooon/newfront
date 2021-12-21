import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerComponent from "../../components/main/BannerComponent";
import ItemComponent from "../../components/main/ItemComponent";
import ItemWrapComponent from "../../components/common/ItemWrapComponent";
import CategoryComponent from "../../components/main/CategoryComponent";
import FooterComponent from "../../components/main/FooterComponent";
import LoadingComponent from "../../components/loading/LoadingComponent";

const MainContainer = ({ loading, coktailData, setItemId, randomCoktail }) => {
  const navigate = useNavigate();
  const onClickItem = (id) => {
    console.log("render");
    setItemId(id);
    navigate(`/detail/${id}`);
  };
  const onClickBanner = () => {
    randomCoktail();
  };
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <BannerComponent onClickBanner={onClickBanner} />
          <CategoryComponent>연인과의 시간에서</CategoryComponent>
          <ItemWrapComponent>
            {coktailData.map((data) => {
              if (data.category === 1) {
                return (
                  <ItemComponent
                    key={data["_id"]}
                    data={data}
                    setItemId={setItemId}
                    onClickItem={onClickItem}
                  />
                );
              }
            })}
          </ItemWrapComponent>
          <CategoryComponent>친구와의 시간에서</CategoryComponent>
          <ItemWrapComponent>
            {coktailData.map((data) => {
              if (data.category === 2) {
                return (
                  <ItemComponent
                    key={data["_id"]}
                    data={data}
                    setItemId={setItemId}
                    onClickItem={onClickItem}
                  />
                );
              }
            })}
          </ItemWrapComponent>
          <CategoryComponent>혼자서도 충분한 당신</CategoryComponent>
          <ItemWrapComponent>
            {coktailData.map((data) => {
              if (data.category === 3) {
                return (
                  <ItemComponent
                    key={data["_id"]}
                    data={data}
                    setItemId={setItemId}
                    onClickItem={onClickItem}
                  />
                );
              }
            })}
          </ItemWrapComponent>
          <CategoryComponent>랜덤을 만들어볼까함</CategoryComponent>
          <ItemWrapComponent>
            {coktailData.map((data) => {
              if (data.category === undefined) {
                return (
                  <ItemComponent
                    key={data["_id"]}
                    data={data}
                    setItemId={setItemId}
                    onClickItem={onClickItem}
                  />
                );
              }
            })}
          </ItemWrapComponent>
          <FooterComponent />
        </>
      )}
    </>
  );
};

export default MainContainer;
