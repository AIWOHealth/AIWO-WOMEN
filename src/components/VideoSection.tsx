import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Layers, Activity, Users, Heart, AlertCircle } from "lucide-react";
import communityWomen from "@/assets/community-women.jpg";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Layers,
      title: "11-Pillar Framework",
      description: "THE LONGEVIS MATRIX™ - comprehensive optimization across all health dimensions",
      color: "text-primary",
    },
    {
      icon: Activity,
      title: "400+ Biomarkers",
      description: "Most comprehensive testing available (vs. 50-150 at competitors)",
      color: "text-violet",
    },
    {
      icon: Users,
      title: "Women-Optimized",
      description: "Cycle-synced protocols designed for female physiology",
      color: "text-teal",
    },
    {
      icon: Heart,
      title: "Community-Driven",
      description: "Wellness Circles & Moai groups for 3-5x better adherence",
      color: "text-coral",
    },
  ];

  const problems = [
    { stat: "67%", label: "Sleep-Deprived" },
    { stat: "70%", label: "Vitamin D Deficient" },
    { stat: "1 in 5", label: "Have PCOS" },
    { stat: "1 in 8", label: "Thyroid Disorders" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full gradient-calm-balance opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full gradient-empowerment opacity-10 blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Problem Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <AlertCircle className="w-5 h-5 text-coral" />
            <span className="text-sm font-medium text-coral uppercase tracking-wider">The Crisis Facing Indian Women</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <span className="text-3xl md:text-4xl font-serif font-bold text-gradient">{problem.stat}</span>
                <p className="text-sm text-muted-foreground mt-1">{problem.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block gradient-empowerment text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
              About AIWO Women
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Apollo Hospitals of{" "}
              <span className="text-gradient">Women's Longevity</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're creating a new category: <strong>Women's Longevity Medicine</strong> —
              positioned between traditional wellness (too soft) and medical care (too late).
              Through our proprietary 11-pillar LONGEVIS MATRIX™, we help women optimize their
              biology, reverse aging, and join a community of 1 million women biohackers.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={communityWomen}
                alt="AIWO Women Community"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 gradient-deep-wisdom opacity-30" />

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full gradient-empowerment flex items-center justify-center shadow-2xl glow-primary">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </motion.button>

              {/* Glass Overlay Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 glass-premium p-4 rounded-xl"
              >
                <p className="font-serif text-lg font-semibold text-foreground">Transform 1 Million Women</p>
                <p className="text-sm text-muted-foreground">Into certified biohackers by 2030</p>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-premium px-4 py-3 rounded-xl shadow-lg"
            >
              <span className="text-2xl font-serif font-bold text-gradient">5-7</span>
              <p className="text-xs text-muted-foreground">Years Younger</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
