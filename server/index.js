const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate", async (req, res) => {
  const { topic, niche } = req.body;

  const prompt = `You are a content strategist. Suggest one trending Instagram reel idea for a creator in the ${niche} niche.
Include a caption, 5 relevant hashtags, and a strong opening hook. Topic: ${topic}`;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ result: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI error:", error.message);
    res.status(500).json({ error: "Failed to generate idea" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
