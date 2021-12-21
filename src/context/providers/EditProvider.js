import { useState } from "react";
import EditContext from "../EditContext";

const EditProvider = ({ children }) => {
  const [editInfo, setEditInfo] = useState({
    coktailName: "",
    sweet: "",
    sour: "",
    bitter: "",
    alcoholDegree: "",
    kind: "",
    perifume: "",
    cocktailContent: "",
    imgURL: "",
    sauceKind: "",
    category: "",
  });

  return (
    <EditContext.Provider
      value={{
        editInfo,
        setEditInfo,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
