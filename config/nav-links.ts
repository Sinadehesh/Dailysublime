import { BookOpenIcon, PaletteIcon, HelpCircleIcon, SparklesIcon } from "lucide-react";

export const NAV_LINKS = [
  {
    title: "What You Get",
    href: "#what-you-get",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Sample Edition",
    href: "#sample-edition",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

// Optional: Enhanced navigation with icons (if you want dropdowns)
export const NAV_LINKS_ENHANCED = [
  {
    title: "Practice",
    href: "/practice",
    menu: [
      {
        title: "Daily Editions",
        tagline: "One painter, one work, every morning.",
        href: "/practice/daily",
        icon: PaletteIcon,
      },
      {
        title: "Archive",
        tagline: "Browse past editions by painter.",
        href: "/practice/archive",
        icon: BookOpenIcon,
      },
      {
        title: "Meditations",
        tagline: "Short practices with constraints.",
        href: "/practice/meditations",
        icon: SparklesIcon,
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "FAQ",
    href: "/faq",
    menu: [
      {
        title: "Help Center",
        tagline: "Get answers to common questions.",
        href: "/help",
        icon: HelpCircleIcon,
      },
    ],
  },
];
