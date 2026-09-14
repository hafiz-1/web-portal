import { Industry } from "@/types/industry";

export const industries: Industry[] = [
  {
    id: "1",
    title: "Enterprise",
    slug: "enterprise",
    description:
      "Technology solutions designed for large and complex organizations.",
    image: "/industries/enterprize.jpg",
    solutions: [
      "Connectivity",
      "Cloud & Data Center",
      "Cybersecurity",
      "Network & Infrastructure",
    ],
  },
  {
    id: "2",
    title: "SME",
    slug: "sme",
    description:
      "Flexible technology solutions that help growing businesses scale.",
    image: "/industries/sme.jpg",
    solutions: [
      "Connectivity",
      "Cloud",
      "Cybersecurity",
    ],
  },
  {
    id: "3",
    title: "Telecom & Carriers",
    slug: "telecom-carriers",
    description:
      "High-capacity infrastructure and connectivity for telecom providers.",
    image: "/industries/telecom-carriers.jpg",
    solutions: [
      "Connectivity",
      "Infrastructure",
    ],
  },
  {
    id: "4",
    title: "Public Sector",
    slug: "public-sector",
    description:
      "Secure and reliable technology infrastructure for public organizations.",
    image: "/industries/public-sector.jpg",
    solutions: [
      "Connectivity",
      "Cybersecurity",
      "Cloud",
    ],
  },
];
