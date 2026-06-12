export type ProjectStatus = "Active" | "Building" | "Concept";

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    category: "DevOps" | "Full Stack" | "Business";
    year: string;
    status: ProjectStatus;
  }

  export const projects: Project[] = [
    {
      id: "f1-predictor",
      title: "F1 Pit Window Predictor",
      description: "Real-time data pipeline — Python, Docker, and Airflow ingest live telemetry to predict tire degradation and optimal pit strategy.",
      techStack: ["Python", "Docker", "Airflow", "MLflow"],
      category: "DevOps",
      year: "2024",
      status: "Active",
      link: "/projects/live-pit"
    },
    {
      id: "run-coach-ai",
      title: "AI Training Plan Generator",
      description: "An intelligent service that generates personalized running race plans. Integrates with Strava and Apple Health to adjust training based on real-world performance data.",
      techStack: ["PostgreSQL", "Next.js", "Strava API", "System Architecture"],
      category: "Full Stack",
      year: "2025",
      status: "Building"
    },
    {
      id: "vessel-brand",
      title: "Vessel Identity",
      description: "Brand identity and holding company structure for IT and property management subsidiaries.",
      techStack: ["Branding", "Design"],
      category: "Business",
      year: "Planned",
      status: "Concept"
    }
  ];
