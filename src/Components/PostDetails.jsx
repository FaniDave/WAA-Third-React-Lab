import React, { useEffect, useState } from "react";
import axios from "axios";

export const PostDetails = ({ postId, onDelete }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the post!", error);
      });
  }, [postId]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/posts/${postId}`)
      .then(() => {
        onDelete(postId);
      })
      .catch((error) => {
        console.error("There was an error deleting the post!", error);
      });
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div
      style={{
        padding: "2vw",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        marginTop: "2vw",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <button
        onClick={handleDelete}
        style={{
          padding: "0.5vw 1vw",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};
