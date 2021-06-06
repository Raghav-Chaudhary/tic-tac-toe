import React, { useState } from "react";
import "../style.css";

export default function Tab(props) {
  var list = null;
  if (props.list) {
    list = props.list.split(" ");
  }

  return (
    <div className="open-tab">
      {list
        ? list.map((title) => (
            <button onClick={() => props.handleNoteChange(title)}>
              {title}
            </button>
          ))
        : null}
    </div>
  );
}
