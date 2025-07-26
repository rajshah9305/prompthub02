import React, { useState, useEffect } from "react";
import PromptCard from "../components/PromptCard";
import SearchBar from "../components/SearchBar";

function Home({ token }) {
  const [prompts, setPrompts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPrompts = async (query = "") => {
    setLoading(true);
    const url = query ? `/api/prompts/search?q=${encodeURIComponent(query)}` : "/api/prompts";
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setPrompts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPrompts();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/prompts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPrompts(search);
  };

  const handleSearch = (q) => {
    setSearch(q);
    fetchPrompts(q);
  };

  const handleAdd = async (text) => {
    const res = await fetch("/api/prompts", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (res.ok) {
      fetchPrompts(search);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <h2>Your Prompts</h2>
      <SearchBar value={search} onSearch={handleSearch} />
      <PromptCard onAdd={handleAdd} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {prompts.map((p) => (
            <li key={p.id} style={{ marginBottom: "1rem" }}>
              <div style={{ background: "#fff", padding: "1rem", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
                <span>{p.text}</span>
                <button
                  style={{
                    float: "right",
                    background: "#db2777",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    padding: "4px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(p.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;