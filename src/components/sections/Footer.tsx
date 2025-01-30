import { Github, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ResumeOptimizer</h3>
            <p className="text-sm text-muted-foreground">
              Empowering job seekers with AI-powered resume optimization since
              2024
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">SOLUTIONS</h4>
            <nav className="space-y-2">
              <FooterLink href="/#features" text="Features" />
              <FooterLink href="/pricing" text="Pricing" />
              <FooterLink href="/#testimonials" text="Testimonials" />
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">SUPPORT</h4>
            <nav className="space-y-2">
              <FooterLink href="/contact" text="Contact Us" />
              <FooterLink href="/faq" text="FAQ" />
              <FooterLink href="/privacy" text="Privacy Policy" />
              <FooterLink href="/terms" text="Terms of Service" />
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">CONNECT</h4>
            <div className="flex gap-4">
              <SocialIcon
                href="https://linkedin.com"
                icon={<LinkedinIcon className="w-5 h-5" />}
              />
              <SocialIcon
                href="https://twitter.com"
                icon={<TwitterIcon className="w-5 h-5" />}
              />
              <SocialIcon
                href="https://github.com/ItsArupSaha/resume_optimizer"
                icon={<Github className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          © 2024 ResumeOptimizer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="text-sm text-muted-foreground hover:text-foreground block transition-colors"
  >
    {text}
  </Link>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-muted-foreground hover:text-foreground"
    target="_blank"
  >
    {icon}
  </Link>
);
