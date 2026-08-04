import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://minecraftstructurefinder.com"),
  title: "Minecraft Structure Finder - Find Any Structure by Seed",
  description:
    "Free Minecraft Structure Finder. Enter any seed to find every village, stronghold, ancient city & more. Works for Java & Bedrock. No download.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Minecraft Structure Finder",
    description: "Find villages, strongholds, ancient cities and more from any Minecraft seed.",
    url: "/",
    siteName: "Minecraft Structure Finder",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Minecraft Structure Finder map with voxel structure markers" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="/vendor/leaflet.css" /></head><body>{children}</body></html>;
}
