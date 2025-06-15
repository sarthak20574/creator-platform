import React, { useState } from "react";
import axios from "axios";

const ContentIdeaAssistant = () => {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("fashion");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/generate", {
        topic,
        niche,
      });
      setResult(res.data.result);
    } catch (err) {
      setResult("❌ Error generating content.");
    }
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📹 Content Idea Assistant</h2>

      <div className="mb-3">
        <label>Topic</label>
        <input
          className="form-control"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. Instagram Growth"
        />
      </div>

      <div className="mb-3">
        <label>Niche</label>
        <select
          className="form-select"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        >
          <option value="fashion">Fashion</option>
          <option value="fitness">Fitness</option>
          <option value="finance">Finance</option>
        </select>
      </div>

      <button
        className="btn btn-primary"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Idea"}
      </button>

      {result && (
        <div className="mt-4 p-3 bg-light border rounded">
          <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default ContentIdeaAssistant;
