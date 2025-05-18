
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MetricsSection from '@/components/MetricsSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    // Animation on scroll effect
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // If element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('active');
        }
      });
    };
    
    // Run once on initial load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <MetricsSection />
        
        {/* Shortened About section with link to full page */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Обо <span className="gradient-text">мне</span>
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <div className="w-full lg:w-1/3 relative">
                <div className="rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/03a35695-ef86-4301-b561-62513f166123.png" 
                    alt="GTM и автоматизация специалист" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Experience badge */}
                <div className="absolute -bottom-6 -right-6 bg-tech-purple text-white py-3 px-6 rounded-lg shadow-lg">
                  <p className="font-bold text-xl">8+ лет опыта</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-2/3">
                <p className="text-lg text-foreground/80 mb-6">
                  Я специалист по автоматизации бизнес-процессов и GTM-инженерии с более чем 8-летним опытом работы. Помогаю бизнесам всех размеров трансформировать их операционную эффективность через внедрение современных технологических решений.
                </p>
                
                <p className="text-lg text-foreground/80 mb-8">
                  Моя цель — создавать системы, которые не просто автоматизируют рутину, но и обеспечивают измеримый результат для бизнеса.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary" asChild>
                    <Link to="/about">Подробнее обо мне</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
