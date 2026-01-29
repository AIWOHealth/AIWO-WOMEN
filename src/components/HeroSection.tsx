import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Activity, Users } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img
          src={heroBg}
          alt="AIWO Women Hero"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 gradient-hero" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full gradient-calm-balance opacity-20 blur-xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-20 w-32 h-32 rounded-full gradient-sisterhood opacity-15 blur-2xl"
      />
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full gradient-empowerment opacity-20 blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-premium px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Join 1 Million Women on the Path to Longevity</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto"
        >
          AIWO Women India's First{" "}
          <span className="text-gradient">Longeivity - Focused</span> Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
        >
          The world's first comprehensive 11-pillar women's longevity ecosystem.
          Science-backed. Physician-led. Community-driven.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-2xl md:text-3xl font-serif text-primary mb-8"
        >
          Live Longer. Live Younger.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Physician-Led</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Activity className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">400+ Biomarkers</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-teal" />
            <span className="text-sm font-medium">Women-Optimized</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center"
        >
          <Button variant="hero" size="xl" className="group">
            Join Community
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
