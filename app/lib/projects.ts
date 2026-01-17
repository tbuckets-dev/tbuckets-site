export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    category: "DevOps" | "Full Stack" | "Business";
  }
  
  export const projects: Project[] = [
    {
      id: "f1-predictor",
      title: "F1 Pit Window Predictor",
      description: "A data engineering pipeline to analyze tire degradation and predict optimal pit windows in real-time. Built with a local DevOps environment focusing on containerization and orchestration.",
      techStack: ["Python", "Docker", "Airflow", "MLflow", "Pandas"],
      category: "DevOps",
      link: "https://github.com/tbuckets-dev/live-pit" // Placeholder link
    },
    {
      id: "run-coach-ai",
      title: "AI Training Plan Generator",
      description: "An intelligent service that generates personalized running race plans. Integrates with Strava and Apple Health to adjust training based on real-world performance data.",
      techStack: ["PostgreSQL", "Next.js", "Strava API", "System Architecture"],
      category: "Full Stack"
    },
    {
      id: "vessel-brand",
      title: "Vessel Identity",
      description: "Brand identity and holding company structure for IT and property management subsidiaries.",
      techStack: ["Branding", "Design"],
      category: "Business"
    }
  ];