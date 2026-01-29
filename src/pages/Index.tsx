import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import CoursesSection from "@/components/CoursesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ParallaxSection id="about" speed={0.2}>
        <VideoSection />
      </ParallaxSection>
      <ParallaxSection id="courses" speed={0.25}>
        <CoursesSection />
      </ParallaxSection>
      <ParallaxSection id="events" speed={0.2}>
        <EventsSection />
      </ParallaxSection>
      <ParallaxSection speed={0.15}>
        <TestimonialsSection />
      </ParallaxSection>
      <Footer />
    </main>
  );
};

export default Index;




