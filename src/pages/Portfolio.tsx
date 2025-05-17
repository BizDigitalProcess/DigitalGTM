
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <PortfolioSection />
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="gradient-text">Упс... Страница временно не доступна</span>
                </h2>
                <h3 className="text-3xl mb-8">
                  <span className="gradient-text">На стадии разработки</span>
                </h3>
              </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
