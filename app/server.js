const express = require("express");
const { Pool } = require("pg");
const app = express();

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "db",            // name of the Docker service for PostgreSQL
  database: "weatherdb",
  password: "postgres",
  port: 5432,
});

// Basic route
app.get("/", (req, res) => {
  res.send("🌦️ Weather App Backend Running!");
});

// Sample weather endpoint
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  const temp = (Math.random() * 15 + 20).toFixed(1);
  const condition = ["sunny", "rainy", "cloudy", "windy"][Math.floor(Math.random() * 4)];
  res.json({ city, temp, condition });
});

// Start server
const port = 8080;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
