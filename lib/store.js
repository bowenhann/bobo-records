import fs from "node:fs/promises";
import path from "node:path";

const dataFile = path.join(process.cwd(), "data", "content.json");
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const redisKey = process.env.CONTENT_KEY || "bobo-records-content";

export const collections = new Set(["images", "recipes", "musicReviews", "films"]);

export async function readContent() {
  if (redisUrl && redisToken) {
    return normalizeContent(await readRedis());
  }
  return normalizeContent(await readFile());
}

export async function writeCollection(collection, value) {
  const content = await readContent();
  content[collection] = value;
  await writeContent(content);
  return content;
}

async function writeContent(content) {
  const normalized = normalizeContent(content);
  if (redisUrl && redisToken) {
    await redisCommand(["SET", redisKey, JSON.stringify(normalized)]);
    return;
  }
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, `${JSON.stringify(normalized, null, 2)}\n`);
}

async function readRedis() {
  const result = await redisCommand(["GET", redisKey]);
  if (!result) return {};
  return JSON.parse(result);
}

async function redisCommand(command) {
  const response = await fetch(redisUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redisToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  if (!response.ok) throw new Error(`Redis request failed: ${response.status}`);
  const data = await response.json();
  return data.result;
}

async function readFile() {
  try {
    return JSON.parse(await fs.readFile(dataFile, "utf8"));
  } catch {
    return {};
  }
}

function normalizeContent(content = {}) {
  return {
    images: Array.isArray(content.images) ? content.images : [],
    recipes: Array.isArray(content.recipes) ? content.recipes : [],
    musicReviews: Array.isArray(content.musicReviews) ? content.musicReviews : [],
    films: Array.isArray(content.films) ? content.films : []
  };
}
