import React from "react";
import DetailContainer from "../containers/detail/DetailContainer";

const DetailPage = ({ itemId, getDetailData, detailData, isAdminLogined }) => {
  return (
    <DetailContainer
      itemId={itemId}
      getDetailData={getDetailData}
      detailData={detailData}
      isAdminLogined={isAdminLogined}
    />
  );
};

export default DetailPage;
