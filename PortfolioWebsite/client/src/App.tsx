import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { useState } from "react";
import DashboardsSection from "@/components/dashboards-section";
import DashboardModal from "@/components/dashboard-modal";

function Router() {
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
    <Switch>
      <Route path="/" component={() => (
        <div>
          <Home />
          <DashboardModal
            isOpen={modalOpen}
            dashboardId={selectedDashboard}
            onClose={closeModal}
          />
        </div>
      )} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
