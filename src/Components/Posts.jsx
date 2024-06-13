import React from "react";
import { Post } from "./Post";

export const Posts = (props) => {
  let customStyleContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2vw",
    margin: "2vw 0",
  };
  return (
    <div style={customStyleContainer}>
      <Post id={props.id} title={props.title} author={props.author} />
    </div>
  );
};
