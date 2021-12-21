import React, { useState, useEffect } from "react";
import DetailComponent from "../../components/detail/DetailComponent";
import { useParams } from "react-router-dom";
import client from "../../libs/api/client";
import LoadingComponent from "../../components/loading/LoadingComponent";
const DetailContainer = ({ isAdminLogined }) => {
  const [itemId, setItemId] = useState("");
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState({});
  const params = useParams();

  useEffect(() => {
    getDetailData();
  }, []);

  const getDetailData = async () => {
    const response = await client.get(`/coktail/${params.id}`);
    setDetailData(response.data.data);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <DetailComponent data={detailData} isAdminLogined={isAdminLogined} />
      )}
    </>
  );
};

export default DetailContainer;
