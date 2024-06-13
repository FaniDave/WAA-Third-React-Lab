import React, { useRef } from "react";
import axios from "axios";

export const AddPost = ({ onAdd }) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const content = contentRef.current.value;

    axios
      .post("http://localhost:8080/posts", { title, author, content })
      .then((response) => {
        onAdd(response.data);
        titleRef.current.value = "";
        authorRef.current.value = "";
        contentRef.current.value = "";
      })
      .catch((error) => {
        console.error("There was an error adding the post!", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "2vw",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        marginTop: "2vw",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        type="text"
        ref={titleRef}
        placeholder="Title"
        required
        style={{
          display: "block",
          marginBottom: "1vw",
          padding: "0.5vw",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <input
        type="text"
        ref={authorRef}
        placeholder="Author"
        required
        style={{
          display: "block",
          marginBottom: "1vw",
          padding: "0.5vw",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <textarea
        ref={contentRef}
        placeholder="Content"
        required
        style={{
          display: "block",
          marginBottom: "1vw",
          padding: "0.5vw",
          width: "100%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5vw 1vw",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </form>
  );
};
