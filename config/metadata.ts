import { Metadata } from "next";

export const generateMetadata = ({
  title = "Daily Sublime - A daily reset for attention",
  description = "Daily Sublime is a 2 to 7 minute ritual that trains perception using masterworks.",
  image = "/images/hero-banner.jpg",
  icons = [{ rel: "icon", url: "/favicon.ico" }],
  noIndex = false
}) => ({ title, description, icons }));
