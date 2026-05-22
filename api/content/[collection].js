import { getBearerToken, verifyToken } from "../../lib/auth.js";
import { collections, writeCollection } from "../../lib/store.js";

export default async function handler(request, response) {
  if (request.method !== "PUT") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }
  const { collection } = request.query;
  if (!collections.has(collection) || !Array.isArray(request.body)) {
    response.status(400).json({ error: "Invalid collection" });
    return;
  }
  if (!verifyToken(getBearerToken(request))) {
    response.status(401).json({ error: "Unauthorized" });
    return;
  }
  const content = await writeCollection(collection, request.body);
  response.status(200).json({ ok: true, [collection]: content[collection] });
}
