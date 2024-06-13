import React, { useEffect, useState, useContext } from "react";
import { Posts } from "./Posts";
import { PostDetails } from "./PostDetails";
import { AddPost } from "./AddPost";
import axios from "axios";
import { SelectedPostContext } from "./SelectedPostContext";

export const Dashboard = () => {
  const customStyleHeader = {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: "3vw",
    margin: "2vw 0",
  };

  const customStyleInputSection = {
    textAlign: "center",
    marginTop: "2vw",
  };

  const customStyleInput = {
    padding: "0.5vw",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "1vw",
  };

  const customStyleButton = {
    padding: "0.5vw 1vw",
    backgroundColor: "#2196f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const [postInfo, setPostInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { selectedPostId, setSelectedPostId } = useContext(SelectedPostContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => {
        setPostInfo(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const changeNameHandler = () => {
    const updatedPostInfo = [...postInfo];
    updatedPostInfo[0].title = inputValue;
    setPostInfo(updatedPostInfo);
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  const handleDelete = (postId) => {
    setPostInfo(postInfo.filter((post) => post.id !== postId));
    setSelectedPostId(null);
  };

  const handleAdd = (newPost) => {
    setPostInfo([...postInfo, newPost]);
  };

  return (
    <div>
      <h1 style={customStyleHeader}>DashBoard</h1>
      <div>
        {postInfo.map((p) => (
          <div key={p.id} onClick={() => handlePostClick(p.id)}>
            <Posts id={p.id} title={p.title} author={p.author} />
          </div>
        ))}
      </div>

      {selectedPostId && (
        <PostDetails postId={selectedPostId} onDelete={handleDelete} />
      )}

      <div style={customStyleInputSection}>
        <input
          value={inputValue}
          onChange={handleChange}
          style={customStyleInput}
          type="text"
          placeholder="Change Title"
        />
        <button onClick={changeNameHandler} style={customStyleButton}>
          Change Name
        </button>
      </div>

      <AddPost onAdd={handleAdd} />
    </div>
  );
};
