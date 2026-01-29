import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, Activity, TrendingDown } from "lucide-react";

const testimonials = [
  {
    quote: "My biological age dropped from 47 to 42 in just 8 months. Sleep quality improved 60%, and I no longer need BP medication. The 11-pillar approach transformed everything.",
    name: "Priya Menon",
    location: "Chennai",
    age: 47,
    result: "↓5 years biological age",
    metrics: ["HbA1c: 7.2 → 5.8", "Sleep Quality: +60%", "BP normalized"],
    avatar: "👩🏽",
  },
  {
    quote: "After 15 years of PCOS struggles, AIWO's cycle-synced protocols and comprehensive biomarker tracking finally gave me answers. Now I help other women as a Certified Biohacker earning ₹1.2L/month.",
    name: "Anjali Sharma",
    location: "Bangalore",
    age: 34,
    result: "PCOS managed + ₹1.2L/month income",
    metrics: ["Insulin: 18 → 8 μIU/mL", "Energy: +45%", "Ambassador income"],
    avatar: "👩🏻",
  },
  {
    quote: "The LONGEVIS MATRIX certification opened doors I never imagined. From stressed corporate executive to wellness entrepreneur helping 500+ women—my health and wealth both transformed.",
    name: "Meera Krishnan",
    location: "Mumbai",
    age: 42,
    result: "↓4 years biological age + wealth ROI",
    metrics: ["Stress score: -55%", "500+ clients", "₹85K/month"],
    avatar: "👩🏾",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full gradient-calm-balance opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full gradient-empowerment opacity-10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block gradient-empowerment text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            Biomarker-Proven Results
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Real Women, <span className="text-gradient">Measured Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our members track progress with data—biological age, biomarkers, and life transformation
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <div className="glass-premium rounded-3xl p-8 h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full gradient-empowerment flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Result Badge */}
                <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <TrendingDown className="w-4 h-4" />
                  {testimonial.result}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.metrics.map((metric) => (
                    <span key={metric} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                      <Activity className="w-3 h-3" />
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full gradient-calm-balance flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location} • Age {testimonial.age}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["The Times of India", "Economic Times", "YourStory", "Femina", "Health & Me"].map((publication) => (
              <div
                key={publication}
                className="font-serif text-lg md:text-xl text-muted-foreground/60 hover:text-primary transition-colors cursor-default"
              >
                {publication}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
