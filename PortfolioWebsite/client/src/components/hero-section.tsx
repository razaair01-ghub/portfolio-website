import { motion } from "framer-motion";
import { FolderOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/WhatsApp Image 2025-09-06 at 01.08.27_a0c1ae65_1757101176726.jpg";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // TODO: Implement actual resume download
    alert("Resume download would be implemented here");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-20 overflow-hidden">
      {/* Hero background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile Photo Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-1 opacity-75"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                  data-testid="profile-photo"
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <img
                      src={profilePhoto}
                      alt="MOHD RAZA - Data Analyst"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                data-testid="hero-title"
              >
                Hi, I'm MOHD RAZA
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-foreground"
                data-testid="hero-subtitle"
              >
                Aspiring Data Analyst | Transitioning from Mechanical Engineering to Data Science
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg lg:text-xl mb-8 text-muted-foreground max-w-2xl leading-relaxed"
                data-testid="hero-description"
              >
                I started my career in Mechanical Engineering but discovered a deep interest in data. I am now transitioning into the field of Data Analytics and Data Science, focusing on SQL, Python, Tableau, Power BI, and Excel. I am passionate about turning raw data into insights and building interactive dashboards.
              </motion.p>
            </div>
          </div>

          {/* Buttons Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 pulse-glow shadow-lg hover:shadow-primary/25"
                data-testid="button-view-projects"
              >
                <FolderOpen className="mr-2" size={20} />
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={downloadResume}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 glow-border"
                data-testid="button-download-resume"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
