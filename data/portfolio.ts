export type PortfolioItem = {
  clientName: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  category: string;
  visual: "launch" | "product" | "story";
};

// Replace these clearly marked demo records with approved client assets and video URLs.
export const portfolio: PortfolioItem[] = [
  {
    clientName: "Demo Client",
    title: "Product launch campaign",
    description: "Placeholder creative showing how a focused launch story can be introduced through video.",
    image: "/images/demo-launch.svg",
    category: "Demo · Product launch",
    visual: "launch",
  },
  {
    clientName: "Demo Client",
    title: "Service explainer",
    description: "Placeholder creative designed to make a service proposition easier to understand at a glance.",
    image: "/images/demo-product.svg",
    category: "Demo · Service promotion",
    visual: "product",
  },
  {
    clientName: "Demo Client",
    title: "Brand story",
    description: "Placeholder creative for a brand-building narrative made specifically for video viewers.",
    image: "/images/demo-story.svg",
    category: "Demo · Brand awareness",
    visual: "story",
  },
];
