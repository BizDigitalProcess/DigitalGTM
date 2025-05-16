
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-light-gray/30 to-transparent dark:from-tech-dark-bg/30 dark:to-transparent -z-10" />
      
      {/* Abstract tech shapes - background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-tech-orange/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Автоматизация бизнес-процессов</span> с помощью AI-технологий
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
              Помогаю компаниям экономить до <span className="font-bold text-tech-purple">80% времени</span> и <span className="font-bold text-tech-orange">60% бюджета</span> через автоматизацию рутинных операций и внедрение интеллектуальных решений
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary text-lg flex items-center gap-2 group">
                Получить бесплатный аудит 
                <ArrowRight 
                  size={18} 
                  className="transition-transform group-hover:translate-x-1" 
                />
              </Button>
              <Button variant="outline" className="text-lg border-tech-purple text-tech-purple hover:bg-tech-purple/10">
                Смотреть портфолио
              </Button>
            </div>
            
            {/* Stats counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
              <div className="tech-card p-4">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">99%</h3>
                <p className="text-sm text-foreground/70">успешных проектов</p>
              </div>
              <div className="tech-card p-4">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">80%</h3>
                <p className="text-sm text-foreground/70">экономии времени</p>
              </div>
              <div className="tech-card p-4">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">3-5x</h3>
                <p className="text-sm text-foreground/70">рост продуктивности</p>
              </div>
              <div className="tech-card p-4">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">2 нед</h3>
                <p className="text-sm text-foreground/70">средний запуск</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Image/Illustration */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Автоматизация бизнес-процессов" 
                className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-500"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-tech-orange text-white py-2 px-4 rounded-lg shadow-lg">
                <p className="font-semibold">Остался 1 слот для аудита</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
