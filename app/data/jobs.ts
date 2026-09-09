import { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    slug: "frontend-developer",
    department: "Technology",
    location: "Lahore",
    experience: "2+ Years",
    type: "Full Time",
    description:
      "Build modern and scalable web applications using React and Next.js.",
    requirements: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "2",
    title: "Backend Developer",
    slug: "backend-developer",
    department: "Technology",
    location: "Islamabad",
    experience: "2+ Years",
    type: "Full Time",
    description:
      "Develop scalable backend services and APIs.",
    requirements: [
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
    ],
  },
];