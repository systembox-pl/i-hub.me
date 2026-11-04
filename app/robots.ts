import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.i-hub.me/sitemap.xml",
    host: "https://www.i-hub.me",
  }
}
