import { motion } from "framer-motion";
import { 
  Database, 
  BarChart3, 
  Brain, 
  Code, 
  TrendingUp, 
  PieChart, 
  LineChart,
  Calculator,
  FileText,
  Monitor,
  Cpu,
  BarChart,
  Activity,
  Settings,
  Zap,
  Target
} from "lucide-react";

const floatingVariants = {
  animate: {
    y: [0, -25, 15, -10, 0],
    x: [0, 10, -15, 5, 0],
    rotate: [0, 8, -5, 3, 0],
    scale: [1, 1.1, 0.9, 1.05, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.3, 0.1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const icons = [
  { Icon: Code, delay: 0, position: { top: "8%", left: "12%" }, color: "text-primary", variant: "floating" },
  { Icon: BarChart3, delay: 1, position: { top: "25%", right: "18%" }, color: "text-secondary", variant: "pulse" },
  { Icon: Database, delay: 2, position: { bottom: "35%", left: "25%" }, color: "text-accent", variant: "floating" },
  { Icon: Brain, delay: 3, position: { bottom: "15%", right: "12%" }, color: "text-primary", variant: "floating" },
  { Icon: TrendingUp, delay: 4, position: { top: "65%", left: "8%" }, color: "text-secondary", variant: "pulse" },
  { Icon: PieChart, delay: 5, position: { top: "45%", right: "28%" }, color: "text-accent", variant: "floating" },
  { Icon: LineChart, delay: 1.5, position: { top: "15%", left: "45%" }, color: "text-primary", variant: "pulse" },
  { Icon: Calculator, delay: 2.5, position: { bottom: "45%", right: "35%" }, color: "text-secondary", variant: "floating" },
  { Icon: FileText, delay: 3.5, position: { top: "75%", right: "8%" }, color: "text-accent", variant: "pulse" },
  { Icon: Monitor, delay: 4.5, position: { bottom: "60%", left: "15%" }, color: "text-primary", variant: "floating" },
  { Icon: Cpu, delay: 0.8, position: { top: "35%", left: "35%" }, color: "text-secondary", variant: "floating" },
  { Icon: BarChart, delay: 1.8, position: { bottom: "25%", right: "25%" }, color: "text-accent", variant: "pulse" },
  { Icon: Activity, delay: 2.8, position: { top: "85%", left: "40%" }, color: "text-primary", variant: "floating" },
  { Icon: Settings, delay: 3.8, position: { top: "55%", right: "45%" }, color: "text-secondary", variant: "pulse" },
  { Icon: Zap, delay: 4.8, position: { bottom: "8%", left: "55%" }, color: "text-accent", variant: "floating" },
  { Icon: Target, delay: 5.8, position: { top: "5%", right: "40%" }, color: "text-primary", variant: "pulse" },
];

export default function FloatingBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
      {icons.map(({ Icon, delay, position, color, variant }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-10 floating-icon`}
          style={position}
          variants={variant === "floating" ? floatingVariants : pulseVariants}
          animate="animate"
          initial={{ opacity: 0, scale: 0 }}
          transition={{ 
            delay,
            ...((variant === "floating" ? floatingVariants : pulseVariants).animate.transition)
          }}
        >
          <Icon size={typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 56} />
        </motion.div>
      ))}
      
      {/* Additional animated particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-primary rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
