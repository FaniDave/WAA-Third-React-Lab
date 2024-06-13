import React from "react";

export const Post = (props) => {
  let customStyle = {
    border: "1px solid silver",
    width: "15vw",
    textAlign: "center",
    backgroundColor: "#3f51b5",
    color: "white",
    opacity: "0.8",
    margin: "1vw",
    padding: "1vw",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };
  return (
    <div style={customStyle}>
      <p>
        <strong>Id:</strong> {props.id}
      </p>
      <p>
        <strong>Title:</strong> {props.title}
      </p>
      <p>
        <strong>Author:</strong> {props.author}
      </p>
    </div>
  );
};
