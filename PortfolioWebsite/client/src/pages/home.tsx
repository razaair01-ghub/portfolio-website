import FloatingBackground from "@/components/floating-background";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CertificatesSection from "@/components/certificates-section";
import ProjectsSection from "@/components/projects-section";
import DashboardsSection from "@/components/dashboards-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import DashboardModal from "@/components/dashboard-modal";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState<string | null>(null);

  const handleDashboardClick = (dashboardId: string) => {
    setSelectedDashboard(dashboardId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDashboard(null);
  };

  return (
    <div className="min-h-screen gradient-bg text-foreground font-sans">
      <FloatingBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <DashboardsSection onDashboardClick={handleDashboardClick} />
      <ContactSection />
      <Footer />
      <DashboardModal
        isOpen={modalOpen}
        dashboardId={selectedDashboard}
        onClose={closeModal}
      />
    </div>
  );
}
