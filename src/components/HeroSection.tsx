
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
        {/* Small title moved to corner */}
        <div className="mb-8 text-left">
          <p className="text-xs md:text-sm text-foreground/70 tracking-wider">Автоматизация бизнес-процессов с помощью AI-технологий</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
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
          
          {/* Right side - Infographic and Stats grid */}
          <div className="w-full lg:w-1/2 relative">
            {/* Custom SVG infographic */}
            <div className="mb-8">
              <div className="relative w-full h-64 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                {/* Custom SVG infographic */}
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Base layers */}
                  <rect x="30" y="100" width="340" height="10" rx="5" fill="#e2e8f0" />
                  
                  {/* Start node */}
                  <circle cx="50" cy="105" r="20" fill="#9b87f5" />
                  <text x="50" y="109" fontSize="11" fill="white" textAnchor="middle">Старт</text>
                  
                  {/* AI processing node */}
                  <rect x="120" y="85" width="80" height="40" rx="5" fill="#9b87f5" />
                  <text x="160" y="109" fontSize="11" fill="white" textAnchor="middle">AI-обработка</text>
                  
                  {/* Optimization node */}
                  <rect x="240" y="85" width="80" height="40" rx="5" fill="#F97316" />
                  <text x="280" y="109" fontSize="11" fill="white" textAnchor="middle">Оптимизация</text>
                  
                  {/* End node */}
                  <circle cx="350" cy="105" r="20" fill="#10b981" />
                  <text x="350" y="109" fontSize="11" fill="white" textAnchor="middle">Результат</text>
                  
                  {/* Connecting arrows */}
                  <path d="M70 105 L120 105" stroke="#9b87f5" strokeWidth="2" />
                  <polygon points="118,101 125,105 118,109" fill="#9b87f5" />
                  
                  <path d="M200 105 L240 105" stroke="#9b87f5" strokeWidth="2" />
                  <polygon points="238,101 245,105 238,109" fill="#9b87f5" />
                  
                  <path d="M320 105 L330 105" stroke="#F97316" strokeWidth="2" />
                  <polygon points="328,101 335,105 328,109" fill="#F97316" />
                  
                  {/* Efficiency indicators */}
                  <text x="50" y="145" fontSize="10" fill="#9b87f5" textAnchor="middle">Исходные</text>
                  <text x="50" y="160" fontSize="10" fill="#9b87f5" textAnchor="middle">данные</text>
                  
                  <text x="160" y="145" fontSize="10" fill="#9b87f5" textAnchor="middle">Автоматизация</text>
                  <text x="160" y="160" fontSize="10" fill="#9b87f5" textAnchor="middle">процессов</text>
                  
                  <text x="280" y="145" fontSize="10" fill="#F97316" textAnchor="middle">Оптимизация</text>
                  <text x="280" y="160" fontSize="10" fill="#F97316" textAnchor="middle">ресурсов</text>
                  
                  <text x="350" y="145" fontSize="10" fill="#10b981" textAnchor="middle">+40-60%</text>
                  <text x="350" y="160" fontSize="10" fill="#10b981" textAnchor="middle">эффективность</text>
                  
                  {/* Top indicators */}
                  <text x="50" y="65" fontSize="10" fill="#64748b" textAnchor="middle">Время</text>
                  <text x="50" y="50" fontSize="12" fill="#9b87f5" textAnchor="middle">100%</text>
                  
                  <text x="160" y="65" fontSize="10" fill="#64748b" textAnchor="middle">Время</text>
                  <text x="160" y="50" fontSize="12" fill="#9b87f5" textAnchor="middle">-40%</text>
                  
                  <text x="280" y="65" fontSize="10" fill="#64748b" textAnchor="middle">Время</text>
                  <text x="280" y="50" fontSize="12" fill="#F97316" textAnchor="middle">-80%</text>
                  
                  <text x="350" y="65" fontSize="10" fill="#64748b" textAnchor="middle">ROI</text>
                  <text x="350" y="50" fontSize="12" fill="#10b981" textAnchor="middle">300%</text>
                </svg>
              </div>
            </div>
            
            {/* Stats counter - larger and full width */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-center">
              <div className="tech-card p-6">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">99%</h3>
                <p className="text-sm md:text-base text-foreground/70">успешных проектов</p>
              </div>
              <div className="tech-card p-6">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">80%</h3>
                <p className="text-sm md:text-base text-foreground/70">экономии времени</p>
              </div>
              <div className="tech-card p-6">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">3-5x</h3>
                <p className="text-sm md:text-base text-foreground/70">рост продуктивности</p>
              </div>
              <div className="tech-card p-6">
                <h3 className="font-bold text-3xl md:text-4xl text-tech-purple">2 нед</h3>
                <p className="text-sm md:text-base text-foreground/70">средний запуск</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-tech-orange text-white py-2 px-4 rounded-lg shadow-lg">
              <p className="font-semibold">Успей записаться на консультацию</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
