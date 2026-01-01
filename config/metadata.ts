import { Metadata } from "next";

export const generateMetadata = ({
  title = "Daily Sublime - A daily reset for attention",
  description = "Daily Sublime is a 2 to 7 minute ritual that trains perception using masterworks. Not trivia. Not wellness noise. You leave with calmer focus, sharper taste, and a cleaner inner pace.",
  image = "/images/hero-banner.jpg",
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png"
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-16x16.png"
    },
  ],
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  icons,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://dailysublime.com",
    ...(image && { images: [{ url: image }] }),
  },
  twitter: {
    title,
    description,
    ...(image && { card: "summary_large_image", images: [image] }),
    creator: "@dailysublime",
  },
  metadataBase: new URL("https://dailysublime.com"),
  ...(noIndex && { robots: { index: false, follow: false } }),
});
