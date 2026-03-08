export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  images: string[];
  techStack: string[];
  date: string;
  url: string;
  description: string;
  role: string;
  keyFeatures: string[];
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "Kindertales Platform",
    category: "web",
    images: [
      "/portfolio/kindertales1.png",
      "/portfolio/kindertales2.png",
      "/portfolio/kindertales3.png",
      "/portfolio/kindertales4.png",
    ],
    techStack: ["React", "Node.js", "REST API", "AI Chat Integration"],
    date: "2023",
    url: "https://www.kindertales.com/",
    description:
      "A web platform for childcare centers to manage enrollment, attendance, billing, and parent communication in one system. Includes an AI-powered chat assistant to support user interaction and information access.",
    role: "Full-Stack Developer (Frontend + Backend)",
    keyFeatures: [
      "Enrollment & attendance management",
      "Parent communication tools",
      "Billing & admin system",
      "AI-powered chat assistant",
    ],
  },
  {
    id: 2,
    title: "Hudl Support Center",
    category: "web",
    images: [
      "/portfolio/support1.png",
      "/portfolio/support2.png",
      "/portfolio/support3.png",
      "/portfolio/support4.png",
    ],
    techStack: ["React", "Next.js", "Node.js", "REST API", "CMS / Knowledge Base System"],
    date: "2024",
    url: "https://support.hudl.com/",
    description:
      "A customer support and knowledge base platform designed to help users quickly find answers, tutorials, and troubleshooting guides. Provides structured documentation, help articles, and training resources for athletes, coaches, and teams.",
    role: "Full-Stack Developer (Frontend + Backend)",
    keyFeatures: [
      "Searchable knowledge base",
      "Support request submission",
      "Tutorials & training resources",
      "Centralized documentation",
    ],
  },
  {
    id: 3,
    title: "MyAIWiz Platform",
    category: "web",
    images: [
      "/portfolio/myaiwiz1.png",
      "/portfolio/myaiwiz2.png",
      "/portfolio/myaiwiz3.png",
      "/portfolio/myaiwiz4.png",
    ],
    techStack: ["React", "Node.js", "REST API", "AI Integration"],
    date: "2024",
    url: "http://myaiwiz.com/",
    description:
      "An AI-powered web platform that enables users to interact with intelligent assistants for task automation and information retrieval. Includes a secure login environment and AI chat capabilities for workflow optimization.",
    role: "Full-Stack Developer (Frontend + Backend)",
    keyFeatures: [
      "AI chat assistant for task automation",
      "Secure login & authentication",
      "Information retrieval & analysis",
      "Interactive dashboard",
    ],
  },
  {
    id: 4,
    title: "Construkted Platform",
    category: "web",
    images: [
      "/portfolio/construkted1.png",
      "/portfolio/construkted2.png",
      "/portfolio/construkted3.png",
    ],
    techStack: ["React", "Node.js", "REST API", "Project Management Tools", "Construction Workflow"],
    date: "2024",
    url: "https://construkted.com/",
    description:
      "A web platform for construction project management, allowing teams to track tasks, resources, and project progress. Provides real-time collaboration tools and centralized project documentation to streamline construction workflows.",
    role: "Full-Stack Developer (Frontend + Backend)",
    keyFeatures: [
      "Task and project tracking",
      "Resource management",
      "Real-time collaboration tools",
      "Centralized project documentation",
    ],
  },
];