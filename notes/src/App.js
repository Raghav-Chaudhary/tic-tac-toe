import logo from "./logo.svg";
import "./App.css";
import Note from "./components/note";
import React, { useState } from "react";

export default function App() {
  const s = window.localStorage;

  const handleSave = (text) => {
    s.setItem(s.length + 1, text);
  };

  return <Note onSave={handleSave} />;
}
