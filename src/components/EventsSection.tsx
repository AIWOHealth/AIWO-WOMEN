import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Video, Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const events = [
  {
    type: "Weekly",
    title: "Free Weekly Webinars",
    description: "Expert-led webinars on essential women's health topics. Perfect for beginners.",
    price: "Free",
    features: ["60 min sessions", "Live Q&A", "Multi-language"],
    icon: Video,
    gradient: "gradient-calm-balance",
    upcoming: ["Introduction to 11-Pillar Framework", "Understanding Your Biomarkers", "Menstrual Cycle Syncing 101"],
  },
  {
    type: "Monthly",
    title: "Deep-Dive Workshops",
    description: "Intensive sessions on specific longevity topics. Interactive and practical with take-home protocols.",
    price: "₹999",
    features: ["90 min workshop", "Downloadable protocols", "7-day replay access"],
    icon: Sparkles,
    gradient: "gradient-sisterhood",
    upcoming: ["Hormonal Health Optimization", "Functional Medicine Basics", "Biohacking Your Kitchen"],
  },
];

const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full gradient-calm-balance opacity-10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block gradient-empowerment text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            Events & Community
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-gradient">AIWO Movement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with like-minded women through our diverse range of events—from free webinars to transformational retreats
          </p>
        </motion.div>

        {/* RISE Summit Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="gradient-deep-wisdom rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ background: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
            <div className="relative z-10">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                🔥 Coming March 2026 - Women's Day
              </span>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                RISE: The Biohacking Revolution for Women
              </h3>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                India's largest women's longevity summit. 5 cities. 10,000 physical + 50,000 virtual attendees.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  March 8, 2026
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Mumbai • Delhi • Bangalore • Hyderabad • Chennai
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  60,000+ Attendees
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-foreground hover:bg-white/90 font-semibold group">
                  Early Bird: ₹2,999
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Virtual Pass: ₹999
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-premium rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* Header */}
              <div className={`${event.gradient} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary-foreground/80 text-sm font-medium">{event.type}</span>
                  <event.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">{event.title}</h3>
                <div className="text-3xl font-serif font-bold text-primary-foreground">{event.price}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">{event.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {event.features.map((feature) => (
                    <span key={feature} className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <p className="text-sm font-medium text-foreground mb-2">Upcoming Topics:</p>
                  <ul className="space-y-2">
                    {event.upcoming.map((topic) => (
                      <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full gradient-empowerment" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full group-hover:variant-hero">
                  {event.price === "Free" ? "Register Free" : "Book Now"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
