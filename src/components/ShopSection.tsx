import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Star, Heart, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    name: "Hormone Harmony Stack",
    category: "Women's Hormones",
    price: "₹2,499",
    originalPrice: "₹3,499",
    priceNote: "/month",
    rating: 4.9,
    reviews: 234,
    image: "⚗️",
    badge: "Bestseller",
    features: ["DIM + I3C", "Vitex", "Maca Root"],
  },
  {
    name: "Energy Amplifier Stack",
    category: "Metabolic Support",
    price: "₹2,999",
    originalPrice: "₹3,999",
    priceNote: "/month",
    rating: 4.8,
    reviews: 156,
    image: "⚡",
    badge: "Popular",
    features: ["CoQ10", "B-Complex", "Iron Bisglycinate"],
  },
  {
    name: "Sleep Optimizer Stack",
    category: "Rest & Recovery",
    price: "₹1,999",
    originalPrice: "₹2,499",
    priceNote: "/month",
    rating: 4.9,
    reviews: 189,
    image: "🌙",
    badge: "New",
    features: ["Magnesium Glycinate", "L-Theanine", "Ashwagandha"],
  },
  {
    name: "Longevity Stack",
    category: "Anti-Aging",
    price: "₹4,999",
    originalPrice: "₹6,999",
    priceNote: "/month",
    rating: 4.9,
    reviews: 78,
    image: "✨",
    badge: "Premium",
    features: ["NMN", "Resveratrol", "Spermidine", "Quercetin"],
  },
];

const ShopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shop" ref={ref} className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full gradient-sisterhood opacity-10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block gradient-empowerment text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            AIWO Kart
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Precision <span className="text-gradient">Supplement Stacks</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Physician-formulated, cycle-synced supplements designed for women's longevity
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-premium rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image/Icon */}
              <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-accent/50 to-background">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>

                {product.badge && (
                  <span className="absolute top-4 left-4 gradient-empowerment text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}

                <button className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4 text-primary" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-muted-foreground">{product.category}</span>
                <h3 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature) => (
                    <span key={feature} className="text-xs px-2 py-0.5 rounded bg-accent/50 text-accent-foreground">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-serif font-bold text-gradient">{product.price}</span>
                  <span className="text-xs text-muted-foreground">{product.priceNote}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shop CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="hero" size="xl" className="group">
            <ShoppingBag className="w-5 h-5" />
            Explore AIWO Kart
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Subscribe & save 20% • Free shipping on orders ₹2,000+
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopSection;
