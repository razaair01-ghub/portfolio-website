import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardData {
  title: string;
  tool: string;
  content: string;
  features: string[];
  technologies: string[];
}

const dashboardData: Record<string, DashboardData> = {
  tableau1: {
    title: 'Sales Performance Dashboard',
    tool: 'Tableau',
    content: 'This comprehensive sales analytics dashboard provides real-time insights into sales performance across multiple dimensions. It features interactive KPI tracking, regional performance analysis, and trend visualization with advanced filtering capabilities.',
    features: [
      'Real-time sales KPI monitoring',
      'Interactive geographic mapping',
      'Drill-down capability by product and region',
      'Automated trend analysis and forecasting',
      'Custom alert system for performance thresholds'
    ],
    technologies: ['Tableau', 'SQL Server', 'REST APIs', 'JavaScript']
  },
  powerbi1: {
    title: 'Financial Analytics Dashboard',
    tool: 'Power BI',
    content: 'Advanced financial reporting dashboard designed for executive teams, featuring comprehensive budget analysis, cash flow projections, and automated variance reporting with drill-through capabilities for detailed investigation.',
    features: [
      'Budget vs Actual variance analysis',
      'Cash flow forecasting models',
      'Automated financial reporting',
      'Executive summary dashboards',
      'Risk assessment indicators'
    ],
    technologies: ['Power BI', 'Azure SQL', 'DAX', 'Power Query']
  },
  tableau2: {
    title: 'HR Analytics Dashboard',
    tool: 'Tableau',
    content: 'Employee analytics dashboard that tracks retention rates, performance metrics, and diversity insights. Includes predictive analytics for workforce planning and automated reporting for HR teams.',
    features: [
      'Employee retention analysis',
      'Performance metric tracking',
      'Diversity and inclusion insights',
      'Predictive workforce planning',
      'Automated HR reporting'
    ],
    technologies: ['Tableau', 'Python', 'HR Systems APIs', 'Statistical Models']
  },
  powerbi2: {
    title: 'E-commerce Analytics Dashboard',
    tool: 'Power BI',
    content: 'Customer behavior analysis dashboard with comprehensive purchase funnel analysis, product performance tracking, and advanced customer segmentation insights for data-driven marketing decisions.',
    features: [
      'Purchase funnel analysis',
      'Customer segmentation models',
      'Product performance tracking',
      'Marketing campaign effectiveness',
      'Real-time sales monitoring'
    ],
    technologies: ['Power BI', 'Google Analytics API', 'Customer Data Platform', 'Machine Learning']
  },
  tableau3: {
    title: 'Healthcare Metrics Dashboard',
    tool: 'Tableau',
    content: 'Healthcare operations dashboard monitoring patient satisfaction, treatment outcomes, resource utilization, and quality indicators. Designed to improve healthcare delivery and operational efficiency.',
    features: [
      'Patient satisfaction tracking',
      'Treatment outcome analysis',
      'Resource utilization monitoring',
      'Quality indicator dashboards',
      'Operational efficiency metrics'
    ],
    technologies: ['Tableau', 'Healthcare APIs', 'Statistical Analysis', 'Quality Metrics']
  },
  powerbi3: {
    title: 'Operations Dashboard',
    tool: 'Power BI',
    content: 'Manufacturing operations dashboard with real-time production metrics, quality control tracking, and predictive maintenance indicators. Optimizes operational efficiency and reduces downtime.',
    features: [
      'Real-time production monitoring',
      'Quality control tracking',
      'Predictive maintenance alerts',
      'OEE (Overall Equipment Effectiveness) analysis',
      'Supply chain optimization'
    ],
    technologies: ['Power BI', 'IoT Sensors', 'Azure IoT Hub', 'Predictive Analytics']
  }
};

interface DashboardModalProps {
  isOpen: boolean;
  dashboardId: string | null;
  onClose: () => void;
}

export default function DashboardModal({ isOpen, dashboardId, onClose }: DashboardModalProps) {
  const data = dashboardId ? dashboardData[dashboardId] : null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          data-testid="dashboard-modal"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glow-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-background p-8 rounded-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="modal-title">
                    {data.title}
                  </h3>
                  <span className="text-secondary font-medium" data-testid="modal-tool">
                    {data.tool}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="modal-close"
                >
                  <X size={24} />
                </Button>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6" data-testid="modal-content">
                {data.content}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1" data-testid="modal-features">
                    {data.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2" data-testid="modal-technologies">
                    {data.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    data-testid="modal-close-button"
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    data-testid="modal-view-dashboard"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
