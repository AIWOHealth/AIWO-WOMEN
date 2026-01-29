import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Award, ArrowRight, CheckCircle, Moon, Wind, Apple, Heart, Dumbbell, Brain, Sun, Sparkles, Droplets, Target, Layers } from "lucide-react";
import { Button } from "./ui/button";


const longevisMatrix = {
  foundation: {
    title: "Foundation",
    impact: "60-80% of Optimization",
    color: "from-primary to-secondary",
    pillars: [
      { icon: Moon, name: "Sleep Optimization" },
      { icon: Wind, name: "Breathing & Respiratory" },
      { icon: Apple, name: "Nutrition & Metabolic" },
      { icon: Heart, name: "Social Connection" },
    ],
  },
  multipliers: {
    title: "Multipliers",
    impact: "30-50% Amplification",
    color: "from-violet to-lavender",
    pillars: [
      { icon: Dumbbell, name: "Exercise & Movement" },
      { icon: Brain, name: "Stress Management" },
      { icon: Sun, name: "Circadian Rhythm" },
      { icon: Target, name: "Purpose & Meaning" },
    ],
  },
  accelerators: {
    title: "Accelerators",
    impact: "10-15% Final Optimization",
    color: "from-teal to-coral",
    pillars: [
      { icon: Sparkles, name: "Environmental/Sunlight" },
      { icon: Layers, name: "Gut Health & Microbiome" },
      { icon: Droplets, name: "Hydration & Fluids" },
    ],
  },
};

const biomarkerPanels = [
  {
    title: "AIWO 77",
    subtitle: "Foundation Panel",
    biomarkers: "77",
    price: "₹3,500",
    description: "Essential health monitoring basics",
    features: ["Metabolic health", "Basic hormones", "Nutrient levels", "Inflammation markers"],
    gradient: "gradient-sisterhood",
  },
  {
    title: "AIWO 181",
    subtitle: "Essential Tier",
    biomarkers: "181",
    price: "₹18,000",
    description: "Comprehensive longevity analysis",
    features: ["Full hormonal profile", "Advanced metabolic", "Bone & fertility", "Cardiovascular markers"],
    gradient: "gradient-empowerment",
    featured: true,
  },
  {
    title: "AIWO 400+",
    subtitle: "Premium & Signature",
    biomarkers: "400+",
    price: "₹75,000",
    description: "Most comprehensive women's longevity panel",
    features: ["Epigenetic age (11 organs)", "Heavy metals & toxins", "Advanced cardiovascular", "Microbiome analysis"],
    gradient: "gradient-rose-gold",
  },
];

const certificationSteps = [
  {
    step: "01",
    title: "Comprehensive Assessment",
    description: "Start with AIWO 181/400 panel, physician consultation, and personalized protocol design.",
    icon: "🧬",
  },
  {
    step: "02",
    title: "6-Month Certification",
    description: "120 hours covering all 11 pillars, clinical skills, and business of wellness. Investment: ₹60,000.",
    icon: "📚",
  },
  {
    step: "03",
    title: "Become a Certified Biohacker",
    description: "Join the AIWO community, earn ₹50K-5L/month as an Ambassador, and transform lives.",
    icon: "🌟",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full gradient-calm-balance opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full gradient-empowerment opacity-10 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* LONGEVIS MATRIX Framework - with background */}
        <div className="relative rounded-3xl overflow-hidden mb-20">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/src/assets/community-women.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/30" />
            <div className="absolute inset-0 gradient-deep-wisdom opacity-40" />
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-32 h-32 rounded-full gradient-empowerment opacity-20 blur-2xl"
          />
          <motion.div
            animate={{ y: [5, -5, 5], rotate: [0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 w-40 h-40 rounded-full gradient-sisterhood opacity-20 blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative z-10 py-16 px-6"
          >
            <div className="text-center mb-12">
              <span className="inline-block gradient-empowerment text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
                THE LONGEVIS MATRIX™
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                11-Pillar <span className="text-gradient">Longevity Framework</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive, science-backed system optimized for female physiology
              </p>
            </div>

            {/* 3-Tier Pyramid */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {Object.entries(longevisMatrix).map(([key, tier], tierIndex) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + tierIndex * 0.15 }}
                  className="glass-premium rounded-3xl p-6 group hover:scale-105 transition-all duration-300 border-[40px] border-transparent hover:border-primary hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
                >
                  {/* Tier Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tierIndex === 0 ? 'bg-teal/20 text-teal' :
                    tierIndex === 1 ? 'bg-primary/20 text-primary' :
                      'bg-violet/20 text-violet'
                    }`}>
                    <Layers className="w-3 h-3" />
                    TIER {tierIndex + 1}
                  </div>

                  {/* Title & Impact */}
                  <h3 className={`font-serif text-2xl font-bold mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                    {tier.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" />
                    {tier.impact}
                  </p>

                  {/* Pillars Grid */}
                  <div className="space-y-2">
                    {tier.pillars.map((pillar) => (
                      <div
                        key={pillar.name}
                        className="flex items-center gap-3 glass rounded-xl px-4 py-3 group-hover:bg-background/60 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full gradient-empowerment flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium">{pillar.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Biomarker Panels */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-teal/10 text-teal px-4 py-1 rounded-full text-sm font-medium mb-6">
              Biomarker Testing
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Science-Backed <span className="text-gradient">Precision Longevity</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {biomarkerPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`glass-card rounded-2xl p-6 relative ${panel.featured ? 'ring-2 ring-primary' : ''}`}
              >
                {panel.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-empowerment text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 rounded-full ${panel.gradient} flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-white font-bold text-lg">{panel.biomarkers}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-center">{panel.title}</h3>
                <p className="text-sm text-muted-foreground text-center mb-2">{panel.subtitle}</p>
                <p className="text-3xl font-bold text-center text-gradient mb-4">{panel.price}</p>
                <p className="text-sm text-muted-foreground text-center mb-4">{panel.description}</p>
                <ul className="space-y-2">
                  {panel.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Program */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-violet/10 text-violet px-4 py-1 rounded-full text-sm font-medium mb-6">
              6-Month Certification
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Become a <span className="text-gradient">Certified Biohacker</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Functional Medicine Practitioner for Women's Health. 120 hours covering all 11 pillars.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {certificationSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < certificationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 gradient-life-journey opacity-30" />
                )}

                <div className="glass-card rounded-3xl p-8 text-center relative z-10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-sm font-semibold text-primary mb-2">Step {item.step}</div>
                  <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-12"
          >
            <Button variant="hero" size="xl" className="group">
              Start Your Longevity Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              <Clock className="w-4 h-4 inline mr-1" /> 6 months • <Users className="w-4 h-4 inline mx-1" /> 120 hours • <Award className="w-4 h-4 inline mx-1" /> Certified Practitioner
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
