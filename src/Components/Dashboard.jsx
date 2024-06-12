import React, { useState } from "react";
import { Posts } from "./Posts";

export const Dashboard = () => {
  const customStyle = {
    position: "relative",
    left: "30vw",
    top: "5vw",
  };

  const customStyleHeader = {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: "3vw"
  }

  const initialPostInfo = [
    { id: "111", title: "Happiness", author: "John" },
    { id: "112", title: "MIU", author: "Dean" },
    { id: "113", title: "Enjoy Life", author: "Jasmine" },
  ];

  const [postInfo, setPostInfo] = useState(initialPostInfo);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const changeNameHandler = () => {
    const updatedPostInfo = [...postInfo];
    updatedPostInfo[0].title = inputValue;
    setPostInfo(updatedPostInfo);
  };

  return (
    <div>
      <h1 style={customStyleHeader}>DashBoard</h1>
      <div>
        {postInfo.map((p) => {
          return (
            <Posts key={p.id} id={p.id} title={p.title} author={p.author} />
          );
        })}
      </div>

      <div style={customStyle}>
        <input
          value={inputValue}
          onChange={handleChange}
          style={{ marginRight: "1vw" }}
          type="text"
        />
        <button onClick={changeNameHandler}>Change Name</button>
      </div>
    </div>
  );
};
