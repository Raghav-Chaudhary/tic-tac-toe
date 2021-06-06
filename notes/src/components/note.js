import React, { useState } from "react";
import "../style.css";

export default function Note(props) {
  const [note, setNote] = useState("");
  const handleClick = (text) => {
    props.onSave(text);
    setNote("");
  };
  return (
    <div className="note-div">
      <h1>Note It!</h1>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      <br />
      <button
        onClick={() => handleClick(document.querySelector("textarea").value)}
      >
        Save
      </button>
    </div>
  );
}
