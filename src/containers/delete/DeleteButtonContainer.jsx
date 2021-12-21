import React from "react";
import { useNavigate } from "react-router-dom";
import DeletButtonComponets from "../../components/delete/DeletButtonComponets";
import client from "../../libs/api/client";

function DeleteButtonContainer({ _id, data, setCoktailData }) {
  const navigate = useNavigate();

  const onRemove = async (_id) => {
    try {
      const response = await client.delete(`/coktail/${_id}`);
      navigate("/");
    } catch (error) {
      console.log("삭제 에러>>>>>>", error);
    }
  };

  return <DeletButtonComponets _id={_id} onRemove={onRemove} />;
}

export default DeleteButtonContainer;
