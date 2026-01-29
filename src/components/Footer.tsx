import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Programs": ["LONGEVIS MATRIX™", "Biomarker Testing", "6-Month Certification", "Ambassador Program"],
    "Events": ["Weekly Webinars", "Deep-Dive Workshops", "RISE Summit 2026", "Wellness Retreats"],
    "Resources": ["Blog", "Research Studies", "FAQs", "Success Stories"],
    "Company": ["About Us", "Our Physicians", "Careers", "Press Kit"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-3xl font-bold text-primary">AIWO</span>
              <span className="font-serif text-xl text-background/80">Women</span>
            </div>
            <p className="text-background/60 mb-4 leading-relaxed">
              Transform 1 million women into certified biohackers by 2030.
            </p>
            <p className="text-lg font-serif text-primary mb-6">
              Live Longer. Live Younger.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="py-8 border-t border-background/10">
          <div className="flex flex-wrap justify-center gap-8 text-background/60 text-sm">
            <a href="mailto:hello@aiwowomen.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              hello@aiwowomen.com
            </a>
            <a href="tel:+918000AIWOWOMEN" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 (800) AIWO-WOMEN
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Chennai (Flagship) • Bangalore • Mumbai • Delhi • Hyderabad
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40">
          <p>© 2026 AIWO Women. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
