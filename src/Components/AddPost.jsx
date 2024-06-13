import React, { useState } from "react";
import axios from "axios";

export const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/posts", { title, author, content })
      .then((response) => {
        onAdd(response.data);
        setTitle("");
        setAuthor("");
        setContent("");
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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
