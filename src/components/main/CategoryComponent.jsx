import React from "react";

const CategoryComponent = ({ ...rest }) => {
  return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      style={{
        margin: "0 auto",
        textAlign: "center",
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: "KOTRA_SONGEULSSI",
        marginBottom: "20px",
      }}
      {...rest}
    />
  );
};

export default CategoryComponent;
