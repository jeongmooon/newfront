import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import EditActionButtons from "../../components/edit/EditActionButtons";
import EditContext from "../../context/EditContext";
import client from "../../libs/api/client";

const EditActionButtonContainer = () => {
  const { editInfo, setEditInfo } = useContext(EditContext);
  const navigate = useNavigate();

  const onPublish = async () => {
    if (editInfo.coktailName === "") {
      alert("이름을 입력하세요");
    } else if (editInfo.category === "") {
      alert("카테고리 번호 입력하세요");
    } else if (editInfo.category > 5) {
      console.log(editInfo.category);
      alert("1~4 입력 하세요");
      return;
    } else if (editInfo.sweet === "") {
      alert("단맛을 입력하세요");
    } else if (editInfo.sweet > 11) {
      alert("1~10 입력하세요");
      return;
    } else if (editInfo.sour === "") {
      alert("신맛을 입력하세요");
    } else if (editInfo.sour > 11) {
      alert("1~10 입력하세요");
      return;
    } else if (editInfo.bitter === "") {
      alert("쓴맛을 입력하세요");
    } else if (editInfo.bitter > 11) {
      alert("1~10 입력하세요");
      return;
    } else if (editInfo.alcoholDegree === "") {
      alert("도수을 입력하세요");
    } else if (editInfo.alcoholDegree > 101) {
      alert("1~100 입력하세요");
      return;
    } else if (editInfo.kind === "") {
      alert("들어간 술을 입력하세요");
    } else if (editInfo.perifume === "") {
      alert("향을 입력하세요");
    } else if (editInfo.cocktailContent === "") {
      alert("내용을 입력하세요");
    }
    const reponse = await client.post("/coktail", editInfo);
    navigate(-1);
  };

  const onCancle = () => {
    navigate(-1);
  };

  return <EditActionButtons onPublish={onPublish} onCancle={onCancle} />;
};

export default EditActionButtonContainer;
