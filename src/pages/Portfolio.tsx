
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-gradient-to-b from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-10">
                <img 
                  src="/placeholder.svg" 
                  alt="В разработке" 
                  className="w-64 h-64 mx-auto opacity-50"
                />
              </div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="gradient-text">Упс...</span> Портфолио временно недоступно
              </h2>
              <p className="text-xl mb-8">
                Страница находится в разработке и скоро будет доступна
              </p>
              <Button className="btn-primary" asChild>
                <a href="/">Вернуться на главную</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
