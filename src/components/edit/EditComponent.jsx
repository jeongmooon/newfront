import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import EditImage from "../common/image/EditImage";

const EditorWrap = styled.div`
  padding-top: 2rem;
`;

const TitleInput = styled.input`
  font-size: 1.5rem;
  font-weight: bolder;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const NumberInput = styled.input`
  font-size: 1.5rem;
  font-weight: bolder;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 2rem;
  width: 50%;
  box-sizing: border-box;
  text-align: center;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 1rem 0;
    text-indent: 1rem;
    min-height: 32rem;
  }
`;

const EditComponent = ({
  onChangeCoktail,
  imgURL,
  onChangeImage,
  editInfo,
  onChangeBody,
}) => {
  const { coktailName } = editInfo;
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <EditorWrap>
      <TitleInput
        name="coktailName"
        value={editInfo.coktailName}
        onChange={onChangeCoktail}
        placeholder="coktailName"
      />
      <TitleInput
        name="category"
        value={editInfo.category}
        onChange={onChangeCoktail}
        placeholder="category 1~ 4"
      />
      <NumberInput
        name="sweet"
        value={editInfo.sweet}
        onChange={onChangeCoktail}
        placeholder="sweet 1 ~ 10"
      />
      <NumberInput
        name="sour"
        value={editInfo.sour}
        onChange={onChangeCoktail}
        placeholder="sour 1 ~ 10"
      />
      <NumberInput
        name="bitter"
        value={editInfo.bitter}
        onChange={onChangeCoktail}
        placeholder="bitter 1~ 10"
      />
      <NumberInput
        name="alcoholDegree"
        value={editInfo.alcoholDegree}
        onChange={onChangeCoktail}
        placeholder="alcoholDegree 1 ~ 100"
      />
      <TitleInput
        name="kind"
        value={editInfo.kind}
        onChange={onChangeCoktail}
        placeholder="kind array"
      />
      <TitleInput
        name="sauceKind"
        value={editInfo.sauceKind}
        onChange={onChangeCoktail}
        placeholder="saucekind array"
      />
      <TitleInput
        name="perifume"
        value={editInfo.perifume}
        onChange={onChangeCoktail}
        placeholder="perifume array"
      />
      <QuillWrapper>
        <ReactQuill
          name="cocktailContent"
          theme="snow"
          modules={modules}
          formoats={formats}
          value={editInfo.cocktailContent}
          onChange={(content, delta, source, editor) => {
            if (source === "user") {
              onChangeBody(editor.getHTML());
            }
          }}
        />
      </QuillWrapper>
      <EditImage imgURL={imgURL} onChangeImage={onChangeImage} />
    </EditorWrap>
  );
};

export default EditComponent;
