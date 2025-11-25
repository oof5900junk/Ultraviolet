"use strict";

const express = require("express");
const { uvPath } = require("./lib/index.cjs"); // import your dist path

const app = express();

// Serve static files from dist
app.use(express.static(uvPath));

// Health check route
app.get("/", (req, res) => {
  res.send("Ultraviolet backend is running!");
});

// Bind to Render’s port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ultraviolet backend running on port ${port}`);
});

