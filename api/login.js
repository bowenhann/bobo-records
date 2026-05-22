import { createToken } from "../lib/auth.js";

export default function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }
  if (request.body?.password !== process.env.ADMIN_PASSWORD) {
    response.status(401).json({ error: "Invalid password" });
    return;
  }
  response.status(200).json({ token: createToken() });
}
