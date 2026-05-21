import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 5173;
const dataDir = path.join(__dirname, "data");
const dataFile = path.join(dataDir, "content.json");
const adminPassword = process.env.ADMIN_PASSWORD || "bobo-dev";
const tokenSecret = process.env.TOKEN_SECRET || adminPassword;
const collections = new Set(["images", "recipes", "musicReviews", "films"]);

app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.get("/api/content", async (_request, response) => {
  response.json(await readContent());
});

app.post("/api/login", (request, response) => {
  if (request.body?.password !== adminPassword) {
    response.status(401).json({ error: "Invalid password" });
    return;
  }
  response.json({ token: createToken() });
});

app.put("/api/content/:collection", requireAdmin, async (request, response) => {
  const { collection } = request.params;
  if (!collections.has(collection) || !Array.isArray(request.body)) {
    response.status(400).json({ error: "Invalid collection" });
    return;
  }
  const content = await readContent();
  content[collection] = request.body;
  await writeContent(content);
  response.json({ ok: true, [collection]: content[collection] });
});

app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Bobo Records listening on http://localhost:${port}`);
});

async function readContent() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    return normalizeContent(JSON.parse(await fs.readFile(dataFile, "utf8")));
  } catch {
    const content = normalizeContent({});
    await writeContent(content);
    return content;
  }
}

async function writeContent(content) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(dataFile, `${JSON.stringify(normalizeContent(content), null, 2)}\n`);
}

function normalizeContent(content) {
  return {
    images: Array.isArray(content.images) ? content.images : [],
    recipes: Array.isArray(content.recipes) ? content.recipes : [],
    musicReviews: Array.isArray(content.musicReviews) ? content.musicReviews : [],
    films: Array.isArray(content.films) ? content.films : []
  };
}

function createToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + 1000 * 60 * 60 * 12 })).toString("base64url");
  const signature = crypto.createHmac("sha256", tokenSecret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function requireAdmin(request, response, next) {
  const token = request.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!token || !verifyToken(token)) {
    response.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

function verifyToken(token) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = crypto.createHmac("sha256", tokenSecret).update(payload).digest("base64url");
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")).exp > Date.now();
  } catch {
    return false;
  }
}
