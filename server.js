import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createToken, getBearerToken, verifyToken } from "./lib/auth.js";
import { collections, readContent, writeCollection } from "./lib/store.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5173;

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.get("/api/content", async (_request, response) => {
  response.json(await readContent());
});

app.post("/api/login", (request, response) => {
  if (request.body?.password !== process.env.ADMIN_PASSWORD) {
    response.status(401).json({ error: "Invalid password" });
    return;
  }
  response.json({ token: createToken() });
});

app.put("/api/content/:collection", async (request, response) => {
  const { collection } = request.params;
  if (!collections.has(collection) || !Array.isArray(request.body)) {
    response.status(400).json({ error: "Invalid collection" });
    return;
  }
  if (!verifyToken(getBearerToken(request))) {
    response.status(401).json({ error: "Unauthorized" });
    return;
  }
  const content = await writeCollection(collection, request.body);
  response.json({ ok: true, [collection]: content[collection] });
});

app.use(express.static(__dirname));

app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Bobo Records listening on http://localhost:${port}`);
});
