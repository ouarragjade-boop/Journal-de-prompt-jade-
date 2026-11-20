const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";
const ROOT = __dirname;

app.use("/icons", express.static(path.join(ROOT, "icons")));

app.get(["/", "/index.html"], (_req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

app.get("/app.js", (_req, res) => {
  res.sendFile(path.join(ROOT, "app.js"));
});

app.get("/sw.js", (_req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.sendFile(path.join(ROOT, "sw.js"));
});

app.get("/manifest.webmanifest", (_req, res) => {
  res.type("application/manifest+json");
  res.sendFile(path.join(ROOT, "manifest.webmanifest"));
});

app.listen(PORT, HOST, () => {
  console.log(`Journal de prompts running on http://${HOST}:${PORT}`);
});
