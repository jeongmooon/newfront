import React, { useContext, useState } from "react";
import EditComponent from "../../components/edit/EditComponent";
import EditContext from "../../context/EditContext";
import client from "../../libs/api/client";

const EditContainer = () => {
  const { editInfo, setEditInfo } = useContext(EditContext);
  const [imgInfo, setImgInfo] = useState({
    imgFile: null,
    imgURL: "",
    imgS3URL: "",
  });

  const onChangeImage = async (e) => {
    const imgFile = e.target.files[0];
    const imgURL = URL.createObjectURL(imgFile);

    setImgInfo({
      ...imgInfo,
      imgURL,
      imgFile,
    });

    const formData = new FormData();
    formData.append("img", imgFile);
    try {
      const response = await client.post("/coktail/images", formData, {
        "Content-type": "multipart/form-data",
      });

      if (response.status === 200) {
        const imgS3URL = response.data.data.location;
        console.log(imgS3URL);
        setEditInfo({
          ...editInfo,
          imgURL: imgS3URL,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeBody = (cocktailContent) => {
    setEditInfo({
      ...editInfo,
      cocktailContent: cocktailContent,
    });
  };

  const onChangeCoktail = (e) => {
    const { name, value } = e.target;

    setEditInfo({
      ...editInfo,
      [name]: value,
    });
  };

  console.log(editInfo);
  return (
    <EditComponent
      onChangeCoktail={onChangeCoktail}
      imgURL={imgInfo.imgURL}
      onChangeImage={onChangeImage}
      editInfo={editInfo}
      onChangeBody={onChangeBody}
    />
  );
};

export default EditContainer;
