import express from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// GET request to return a welcome message
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// POST request to create a new item
app.post("/items", (req, res) => {
  const newItem = req.body; // Get the new item from the request body
  res.status(201).json(newItem); // Respond with the created item
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
