import type { MetadataRoute } from "next";
import { defaultDescription, defaultTitle } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultTitle,
    short_name: "INDYS '26",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#080f20",
    theme_color: "#0d1b3e",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
