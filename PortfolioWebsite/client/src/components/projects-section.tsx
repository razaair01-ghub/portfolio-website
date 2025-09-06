import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database, BarChart3, Brain, TrendingUp, Cpu } from "lucide-react";

const projects = [
  {
    title: "Data Analysis Project 1",
    description: "Placeholder for your first data analysis project. This will showcase your skills with SQL, Python, and data visualization tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["SQL", "Python", "Tableau"],
    icons: [Database, Code2, BarChart3],
    github: "#",
    demo: "#"
  },
  {
    title: "Excel Dashboard Project",
    description: "Placeholder for an advanced Excel dashboard project demonstrating your proficiency with Excel's analytical capabilities.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Excel", "Data Analysis", "Dashboards"],
    icons: [BarChart3, TrendingUp],
    github: "#",
    demo: "#"
  },
  {
    title: "Power BI Visualization",
    description: "Placeholder for a Power BI project showcasing interactive data visualizations and business intelligence insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Power BI", "Data Visualization", "Business Intelligence"],
    icons: [BarChart3, Brain],
    github: "#",
    demo: "#"
  },
  {
    title: "Python Data Science Project",
    description: "Placeholder for a comprehensive Python-based data science project featuring data cleaning, analysis, and machine learning.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "Machine Learning", "Data Science"],
    icons: [Code2, Brain, Cpu],
    github: "#",
    demo: "#"
  },
  {
    title: "Tableau Interactive Dashboard",
    description: "Placeholder for a Tableau dashboard project showing your ability to create compelling and interactive data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Tableau", "Data Visualization", "Analytics"],
    icons: [BarChart3, TrendingUp],
    github: "#",
    demo: "#"
  },
  {
    title: "SQL Database Project",
    description: "Placeholder for an SQL project demonstrating your database skills, query optimization, and data manipulation expertise.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["SQL", "Database Design", "Data Management"],
    icons: [Database, Code2],
    github: "#",
    demo: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" data-testid="projects-title">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glow-border rounded-lg overflow-hidden transition-all duration-300 group"
              data-testid={`project-${index}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="text-accent" size={20} />
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-primary hover:text-primary/80 transition-colors duration-300"
                      data-testid={`project-github-${index}`}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-secondary hover:text-secondary/80 transition-colors duration-300"
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
