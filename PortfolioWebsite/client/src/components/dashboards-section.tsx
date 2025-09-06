import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, ShoppingCart, Heart, Factory, ExternalLink } from "lucide-react";

const dashboards = [
  {
    id: "tableau1",
    title: "Sales Performance Dashboard",
    tool: "Tableau",
    description: "Comprehensive sales analytics dashboard featuring KPI tracking, regional performance, and trend analysis with interactive filters and drill-down capabilities.",
    icon: BarChart3,
    color: "text-primary"
  },
  {
    id: "powerbi1",
    title: "Financial Analytics",
    tool: "Power BI",
    description: "Advanced financial reporting dashboard with budget vs actual analysis, cash flow projections, and automated variance reporting for executive teams.",
    icon: TrendingUp,
    color: "text-secondary"
  },
  {
    id: "tableau2",
    title: "HR Analytics Dashboard",
    tool: "Tableau",
    description: "Employee analytics dashboard tracking retention rates, performance metrics, diversity insights, and predictive analytics for workforce planning.",
    icon: Users,
    color: "text-accent"
  },
  {
    id: "powerbi2",
    title: "E-commerce Analytics",
    tool: "Power BI",
    description: "Customer behavior analysis dashboard with purchase funnel analysis, product performance tracking, and customer segmentation insights.",
    icon: ShoppingCart,
    color: "text-primary"
  },
  {
    id: "tableau3",
    title: "Healthcare Metrics",
    tool: "Tableau",
    description: "Healthcare operations dashboard monitoring patient satisfaction, treatment outcomes, resource utilization, and quality indicators.",
    icon: Heart,
    color: "text-secondary"
  },
  {
    id: "powerbi3",
    title: "Operations Dashboard",
    tool: "Power BI",
    description: "Manufacturing operations dashboard with real-time production metrics, quality control tracking, and predictive maintenance indicators.",
    icon: Factory,
    color: "text-accent"
  }
];

interface DashboardsSectionProps {
  onDashboardClick: (dashboardId: string) => void;
}

export default function DashboardsSection({ onDashboardClick }: DashboardsSectionProps) {
  return (
    <section id="dashboards" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" data-testid="dashboards-title">
            Interactive Dashboards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {dashboards.map((dashboard, index) => {
            const IconComponent = dashboard.icon;
            return (
              <motion.div
                key={dashboard.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glow-border rounded-lg p-6 transition-all duration-300 cursor-pointer"
                onClick={() => onDashboardClick(dashboard.id)}
                data-testid={`dashboard-${dashboard.id}`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`text-3xl ${dashboard.color} mr-4`} />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{dashboard.title}</h3>
                    <span className="text-secondary text-sm font-medium">{dashboard.tool}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{dashboard.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-medium">Click to explore</span>
                  <ExternalLink className="text-primary" size={20} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
