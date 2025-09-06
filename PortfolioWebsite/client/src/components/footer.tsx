import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border relative z-10" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground" data-testid="copyright">
              &copy; 2024 Alex Rodriguez. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6" data-testid="footer-social-links">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="footer-link-linkedin"
            >
              <SiLinkedin className="text-xl" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="footer-link-github"
            >
              <SiGithub className="text-xl" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid="footer-link-instagram"
            >
              <SiInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
