import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number; // 0.1 = slow parallax, 0.5 = medium, 1 = fast
    id?: string;
}

const ParallaxSection = ({
    children,
    className = "",
    speed = 0.3,
    id
}: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Calculate parallax offset based on scroll progress
    // Range: -100 to 100 means section moves 100px up/down as it scrolls through viewport
    const rawY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [100 * speed, 0, -100 * speed]
    );

    // Add spring physics for smoother animation in both directions
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={ref} id={id} className={`relative ${className}`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};

export default ParallaxSection;
