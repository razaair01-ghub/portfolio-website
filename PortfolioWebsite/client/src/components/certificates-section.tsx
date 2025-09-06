import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const educationAndCertificates = [
  {
    title: "B.Tech in Mechanical Engineering",
    description: "Bachelor of Technology degree in Mechanical Engineering with focus on engineering principles, design, and analytical thinking that supports data analysis work.",
    provider: "IFTM University, Moradabad",
    date: "2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    learnings: [
      "Strong analytical and problem-solving skills",
      "Mathematical and statistical foundation for data analysis",
      "Engineering design principles and systematic thinking",
      "Project management and teamwork experience",
      "Technical documentation and reporting skills",
      "Critical thinking and data-driven decision making"
    ]
  },
  {
    title: "Data Analytics Certification",
    description: "Future certification in data analytics to enhance skills in data processing and visualization.",
    provider: "To be completed",
    date: "Upcoming",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    learnings: [
      "Advanced SQL for data extraction and transformation",
      "Python programming for data analysis and automation",
      "Data visualization with Tableau and Power BI",
      "Statistical analysis and business intelligence",
      "Dashboard development and data storytelling",
      "Best practices in data analysis workflows"
    ]
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Planned certification to expand knowledge in machine learning and predictive analytics.",
    provider: "Future Study",
    date: "Planned",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
    learnings: [
      "Machine learning algorithms and model selection",
      "Data preprocessing and feature engineering",
      "Model evaluation and performance metrics",
      "Supervised and unsupervised learning techniques",
      "Predictive analytics and forecasting",
      "Implementation of ML models in real-world scenarios"
    ]
  },
];

export default function CertificatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certificatesPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      Math.min(prev + 1, educationAndCertificates.length - certificatesPerView)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" data-testid="certificates-title">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex"
                data-testid="certificates-slider"
              >
                {educationAndCertificates.slice(currentIndex, currentIndex + certificatesPerView).map((cert, index) => (
                  <div key={index} className="min-w-full lg:min-w-1/2 px-4">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glow-border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                      data-testid={`certificate-${index}`}
                    >
                      {/* Certificate Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={cert.image}
                          alt={`${cert.title} Certificate`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Award className="text-secondary text-2xl drop-shadow-lg" />
                        </div>
                      </div>

                      {/* Certificate Content */}
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-primary font-medium">{cert.provider}</span>
                            <span className="text-muted-foreground text-sm">{cert.date}</span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                        </div>

                        {/* What I Learned Section */}
                        <div className="border-t border-border pt-4">
                          <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            What I Learned
                          </h4>
                          <ul className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin">
                            {cert.learnings.map((learning, learningIndex) => (
                              <motion.li
                                key={learningIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: learningIndex * 0.1 }}
                                className="flex items-start text-sm text-muted-foreground"
                              >
                                <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="leading-relaxed">{learning}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <Button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 p-3 rounded-full transition-colors duration-300 disabled:opacity-30 z-10"
            data-testid="certificates-prev"
          >
            <ChevronLeft className="text-primary" />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentIndex >= educationAndCertificates.length - certificatesPerView}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 p-3 rounded-full transition-colors duration-300 disabled:opacity-30 z-10"
            data-testid="certificates-next"
          >
            <ChevronRight className="text-primary" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(educationAndCertificates.length / certificatesPerView) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * certificatesPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / certificatesPerView) === i
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
                data-testid={`certificate-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
