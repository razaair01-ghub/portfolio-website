import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log("Contact form data:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary" data-testid="contact-title">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glow-border rounded-lg p-8"
            data-testid="contact-form"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-muted-foreground mb-2" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="bg-muted border-border"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label className="block text-muted-foreground mb-2" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="bg-muted border-border"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-muted-foreground mb-2" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  className="bg-muted border-border resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 pulse-glow"
                data-testid="button-send-message"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glow-border rounded-lg p-8" data-testid="contact-info">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-primary text-xl mr-4" />
                  <span className="text-muted-foreground">razaair1@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="glow-border rounded-lg p-8" data-testid="social-links">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Follow me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/mohd-raza-913990258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-110"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://github.com/razaair01-ghub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-secondary hover:text-secondary/80 transition-all duration-300 transform hover:scale-110"
                  data-testid="link-github"
                >
                  <SiGithub />
                </a>
                <a
                  href="mailto:razaair1@gmail.com"
                  className="text-3xl text-primary hover:text-primary/80 transition-all duration-300 transform hover:scale-110"
                  data-testid="link-email"
                >
                  <Mail />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
