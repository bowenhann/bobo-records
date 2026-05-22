import crypto from "node:crypto";

const tokenSecret = process.env.TOKEN_SECRET || process.env.ADMIN_PASSWORD || "bobo-dev";

export function createToken() {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + 1000 * 60 * 60 * 12 })).toString("base64url");
  const signature = crypto.createHmac("sha256", tokenSecret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifyToken(token = "") {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = crypto.createHmac("sha256", tokenSecret).update(payload).digest("base64url");
  if (signature.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;
  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")).exp > Date.now();
  } catch {
    return false;
  }
}

export function getBearerToken(request) {
  const header = request.headers.authorization || request.headers.Authorization || "";
  return header.replace(/^Bearer\s+/i, "");
}
