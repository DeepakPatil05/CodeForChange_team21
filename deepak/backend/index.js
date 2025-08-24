import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});
app.post("/api/add-item", (req, res) => {
  const { item } = req.body;
  console.log("Received from frontend:", item);

  res.json({ success: true, receivedItem: item });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));