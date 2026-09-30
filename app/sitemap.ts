import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

const routes = ["", "/product", "/roles", "/how-it-works", "/security", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.7,
  }));
}
