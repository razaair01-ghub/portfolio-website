import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const skills = [
  { name: "SQL", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "Tableau", percentage: 75 },
  { name: "Power BI", percentage: 70 },
  { name: "Excel", percentage: 90 },
];

export default function AboutSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-fill");
            progressBars.forEach((bar) => {
              const percentage = bar.getAttribute("data-percentage");
              if (percentage) {
                (bar as HTMLElement).style.width = `${percentage}%`;
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glow-border rounded-lg p-8"
            data-testid="about-bio"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I started my career in Mechanical Engineering but discovered a deep interest in data. 
              I am now transitioning into the field of Data Analytics and Data Science, focusing on 
              SQL, Python, Tableau, Power BI, and Excel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am passionate about turning raw data into insights and building interactive dashboards 
              that help businesses make data-driven decisions. My engineering background gives me a 
              unique analytical perspective on problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm committed to continuous learning and developing my skills in data analysis, 
              visualization, and extracting meaningful insights from complex datasets.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glow-border rounded-lg p-8"
            ref={skillsRef}
            data-testid="about-skills"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      data-percentage={skill.percentage}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
