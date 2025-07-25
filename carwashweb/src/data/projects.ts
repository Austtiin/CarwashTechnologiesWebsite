// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  features: string[];
  completion: string;
  image: string; // We'll use actual images now
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sunshine Express Car Wash",
    location: "Miami, FL",
    type: "New Construction",
    description: "Modern tunnel car wash with automated systems and eco-friendly features.",
    features: ["60-foot tunnel", "Reclaim system", "LED lighting", "Mobile app integration"],
    completion: "2024",
    image: "/sonnys-logo.jpg", // Using an actual image from your public folder
  },
  {
    id: 2,
    title: "Quick Clean Auto Spa",
    location: "Dallas, TX",
    type: "Renovation & Upgrade",
    description: "Complete renovation of existing facility with new equipment and modern design.",
    features: ["Equipment upgrade", "New chemical systems", "Enhanced lighting", "Customer lounge"],
    completion: "2024",
    image: "/peco-logo.jpg",
  },
  // ... add other projects here
];