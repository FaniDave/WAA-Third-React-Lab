import React from "react"; 
import { Post } from "./Post";

export const Posts = (props) => {
    let customStyleContainer = {
      display: "inline-flex",
      marginRight: "2vw",
      position: "relative",
      left: "30vw",
    };
    return (
        <div style={customStyleContainer}>
           <Post id={props.id} title={props.title} author={props.author} />
      </div>
     )
}