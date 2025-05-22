
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-light-gray/30 to-transparent dark:from-tech-dark-bg/30 dark:to-transparent -z-10" />
      
      {/* Abstract tech shapes - background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-tech-orange/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small title moved above the offer */}
        <div className="mb-8 text-center">
          <p className="text-xs md:text-sm text-foreground/70 tracking-wider">Автоматизация бизнес-процессов с помощью AI-технологий</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left side - Text content */}
          <div className="w-full mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Сэкономим вам </span>
              <span className="text-tech-purple">80% времени</span>
              <span className="text-foreground"> и </span>
              <span className="text-tech-orange">60% бюджета</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
              через автоматизацию рутинных операций и внедрение интеллектуальных решений
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button 
                className="btn-primary text-lg py-6 px-8 flex items-center gap-2 group" 
                onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}
              >
                Получить бесплатный аудит 
                <ArrowRight 
                  size={18} 
                  className="transition-transform group-hover:translate-x-1" 
                />
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8 border-tech-purple text-tech-purple hover:bg-tech-purple/10" asChild>
                <Link to="/portfolio">Как мы сэкономили нашим клиентам</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating badge moved above stats */}
        <div className="bg-tech-orange text-white py-2 px-4 rounded-lg shadow-lg w-fit mx-auto mb-10">
          <p className="font-semibold">Успей записаться на консультацию</p>
        </div>
        
        {/* Stats counter - horizontal below buttons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="tech-card p-4">
            <h3 className="font-bold text-2xl md:text-3xl text-tech-purple">99%</h3>
            <p className="text-xs md:text-sm text-foreground/70">успешных проектов</p>
          </div>
          <div className="tech-card p-4">
            <h3 className="font-bold text-2xl md:text-3xl text-tech-purple">80%</h3>
            <p className="text-xs md:text-sm text-foreground/70">экономии времени</p>
          </div>
          <div className="tech-card p-4">
            <h3 className="font-bold text-2xl md:text-3xl text-tech-purple">3-5x</h3>
            <p className="text-xs md:text-sm text-foreground/70">рост продуктивности</p>
          </div>
          <div className="tech-card p-4">
            <h3 className="font-bold text-2xl md:text-3xl text-tech-purple">2 нед</h3>
            <p className="text-xs md:text-sm text-foreground/70">средний запуск</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
