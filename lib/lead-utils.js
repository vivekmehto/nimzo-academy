const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function getRateLimitStore() {
  if (!globalThis.__leadRateLimitStore) {
    globalThis.__leadRateLimitStore = new Map();
  }

  return globalThis.__leadRateLimitStore;
}

export function getClientIp(req) {
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return req.headers.get("x-real-ip") || "unknown";
}

export function applyRateLimit(req, key) {
  const store = getRateLimitStore();
  const ip = getClientIp(req);
  const now = Date.now();
  const storeKey = `${key}:${ip}`;
  const entry = store.get(storeKey);

  if (!entry || now - entry.startedAt > RATE_LIMIT_WINDOW_MS) {
    store.set(storeKey, { count: 1, startedAt: now });
    return null;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Response.json(
      {
        success: false,
        message: "Too many submissions. Please wait a few minutes and try again.",
      },
      { status: 429 },
    );
  }

  entry.count += 1;
  store.set(storeKey, entry);
  return null;
}

export function hasSpamTrap(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
