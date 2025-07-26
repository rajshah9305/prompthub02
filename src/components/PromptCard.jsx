import React, { useState } from "react";

function PromptCard({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20, display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Add a new prompt..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          flex: 1,
          padding: 10,
          borderRadius: 6,
          border: "1px solid #eee",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0 16px",
          background: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default PromptCard;