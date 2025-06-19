const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // ✅ Enable CORS

const PORT = process.env.PORT || 5000;

// ✅ New Sample Data
const students = [
  { id: 1, name: "Aarav", course: "Full Stack Web Dev", city: "Mumbai" },
  { id: 2, name: "Diya", course: "Data Science", city: "Delhi" },
  { id: 3, name: "Kabir", course: "UI/UX Design", city: "Pune" }
];

// Default route (optional)
app.get("/", (req, res) => {
  res.send("Student API is working. Go to /students");
});

// ✅ New route
app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
