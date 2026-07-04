export function estimateReadTime(body: string): number {
  return Math.max(1, Math.round(body.split(/\s+/).length / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

