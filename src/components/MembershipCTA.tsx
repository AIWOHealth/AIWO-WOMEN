import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Check, Crown, Star, Zap } from "lucide-react";
import { Button } from "./ui/button";

const membershipTiers = [
  {
    name: "Essential",
    subtitle: "Foundation Builder",
    price: "₹2,49,000",
    priceNote: "/year",
    pillars: "4 Pillars",
    icon: Zap,
    features: [
      "AIWO 181 Panel (2×/year)",
      "Quarterly Physician",
      "Monthly Wellness Circles",
      "Moai Sisterhood",
      "Digital Platform Access",
    ],
    outcomes: "60-70% optimization",
  },
  {
    name: "Premium",
    subtitle: "Complete Optimizer",
    price: "₹5,99,000",
    priceNote: "/year",
    pillars: "8 Pillars",
    icon: Star,
    featured: true,
    features: [
      "AIWO 400 Panel (2×/year)",
      "WHOOP or Oura Ring",
      "Bi-weekly Physician",
      "DEXA & VO2 Testing",
      "3-Day Annual Retreat",
    ],
    outcomes: "↓3-5 years biological age",
  },
  {
    name: "Signature",
    subtitle: "Total Mastery",
    price: "₹9,99,000",
    priceNote: "/year",
    pillars: "All 11 Pillars",
    icon: Crown,
    features: [
      "AIWO 400 Panel (4×/year)",
      "Epigenetic Testing (2×/year)",
      "Concierge 24/7 Access",
      "Monthly IV Therapy",
      "7-Day International Retreat",
    ],
    outcomes: "↓5-7 years biological age",
  },
];

const MembershipCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-empowerment opacity-95" />
      <div className="absolute inset-0" style={{ background: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-24 h-24 rounded-full bg-white/10 blur-xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/10 blur-xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">90-Day Satisfaction Guarantee</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your Longevity Path
            </h2>

            <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
              Accessible premium health optimization. Global quality at India-first pricing.
            </p>
          </motion.div>

          {/* Membership Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`rounded-2xl p-6 ${tier.featured ? 'bg-white ring-4 ring-white/50 shadow-2xl' : 'bg-white/10 backdrop-blur-sm'}`}
              >
                {tier.featured && (
                  <div className="text-center mb-2">
                    <span className="inline-block gradient-empowerment text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <tier.icon className={`w-10 h-10 mx-auto mb-2 ${tier.featured ? 'text-primary' : 'text-white'}`} />
                  <h3 className={`font-serif text-2xl font-bold ${tier.featured ? 'text-foreground' : 'text-white'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${tier.featured ? 'text-muted-foreground' : 'text-white/70'}`}>
                    {tier.subtitle}
                  </p>
                </div>

                <div className="text-center mb-4">
                  <span className={`text-3xl font-bold ${tier.featured ? 'text-gradient' : 'text-white'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm ${tier.featured ? 'text-muted-foreground' : 'text-white/70'}`}>
                    {tier.priceNote}
                  </span>
                  <p className={`text-sm font-medium mt-1 ${tier.featured ? 'text-primary' : 'text-white/90'}`}>
                    {tier.pillars}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 text-sm ${tier.featured ? 'text-foreground' : 'text-white/90'}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${tier.featured ? 'text-primary' : 'text-white'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`text-center p-2 rounded-lg ${tier.featured ? 'bg-primary/10' : 'bg-white/10'}`}>
                  <span className={`text-sm font-medium ${tier.featured ? 'text-primary' : 'text-white'}`}>
                    {tier.outcomes}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="xl"
              className="bg-white text-white hover:bg-white/90 shadow-2xl hover:shadow-white/25 font-semibold group gradient-empowerment"
            >
              <span className="text-white">Start Your Journey</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm"
          >
            <span>✓ 90-Day Satisfaction Guarantee</span>
            <span>✓ Physician-Led Protocols</span>
            <span>✓ Secure Payment</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;
