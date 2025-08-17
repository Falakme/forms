import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://forms.falak.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Note: Dynamic form pages are generated as users visit them
    // You can add specific form URLs here if needed
  ];
}
