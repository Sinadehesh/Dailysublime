export const PLANS = [
  {
    name: "Monthly",
    info: "For daily practice",
    price: {
      monthly: 9.99,
      yearly: 0,
    },
    features: [
      { text: "Daily editions with one painter at a time" },
      { text: "Access to full archive of past editions" },
      { text: "New editions every morning" },
      { text: "2-7 minute daily practice" },
      { text: "Five noticing prompts per edition" },
      { text: "One daily meditation with constraint" },
      { text: "Cancel anytime" },
    ],
    btn: {
      text: "Start with €9.99 per month",
      href: "/checkout?plan=monthly",
      variant: "default",
    },
    highlighted: true,
  },
  {
    name: "Full Course",
    info: "Best value",
    price: {
      monthly: 0,
      yearly: 19.99,
    },
    features: [
      { text: "All current daily editions, forever" },
      { text: "No recurring payments" },
      { text: "Lifetime access to all course content" },
      { text: "All future updates included" },
      { text: "Download for offline access" },
      { text: "Support the creation of new courses" },
      { text: "One-time payment" },
    ],
    btn: {
      text: "Buy the full course for €19.99",
      href: "/checkout?plan=course",
      variant: "gold",
    },
    badge: "Best Value",
  },
  {
    name: "Premium",
    info: "Support the project",
    price: {
      monthly: 30,
      yearly: 0,
    },
    features: [
      { text: "Everything in Monthly, plus other courses" },
      { text: "Early access to new courses" },
      { text: "Help fund future courses" },
      { text: "Exclusive community access" },
      { text: "Monthly live sessions with artists" },
      { text: "Direct email support" },
      { text: "Cancel anytime" },
    ],
    btn: {
      text: "Go Premium for €30 per month",
      href: "/checkout?plan=premium",
      variant: "default",
    },
  },
];

export const WORKSPACE_LIMIT = 1;
