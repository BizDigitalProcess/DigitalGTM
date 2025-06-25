
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MetricsSection from '@/components/MetricsSection';
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
        
        {/* Services section with black heading */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Услуги по автоматизации и оптимизации
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Внедряем интеллектуальные решения, которые качественно трансформируют бизнес-процессы. Каждый проект сопровождается четкими метриками эффективности и прозрачной отчетностью.
              </p>
            </div>
            
            <ServicesSection />
          </div>
        </section>
        
        {/* Metrics section with black heading */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Измеримые результаты автоматизации
              </h2>
            </div>
            
            {/* Salary vs AI Agent comparison */}
            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-tech-dark-bg/50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-tech-purple">Человек-сотрудник</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Зарплата: 80,000 – 150,000 ₽/мес.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Налоги и отчисления: +30%</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Рабочее место: 10,000 – 30,000 ₽/мес.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Обработка 300-500 операций/день</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Требуется обучение и контроль</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Работает 8 часов/5 дней в неделю</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-500">–</span>
                      <span>Может уйти в любой момент</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gray-100 dark:bg-tech-dark-bg/70 rounded">
                    <p className="font-bold text-lg">Итого: от 114,000 ₽/мес.</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-tech-dark-bg/50 p-6 rounded-lg shadow-sm border border-tech-purple">
                  <h3 className="text-xl font-bold mb-4 text-tech-orange">AI-решение</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Стоимость: 30,000 – 60,000 ₽/мес.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Без дополнительных отчислений</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Не требует физического места</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Обработка 3000-10000+ операций/день</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Настраивается один раз</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Работает 24/7/365</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-500">+</span>
                      <span>Масштабируется по необходимости</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-tech-purple/10 dark:bg-tech-purple/20 rounded">
                    <p className="font-bold text-lg">Экономия: от 54,000 ₽/мес.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <MetricsSection />
          </div>
        </section>
        
        {/* About me section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Обо мне
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* About me content */}
              <div className="w-full flex flex-col lg:flex-row items-center gap-6">
                {/* Image - smaller size */}
                <div className="w-24 h-24 lg:w-28 lg:h-28 relative flex-shrink-0">
                  <div className="rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/03a35695-ef86-4301-b561-62513f166123.png" 
                      alt="Богомолов Глеб - GTM и автоматизация специалист" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute -bottom-2 -right-2 bg-tech-purple text-white py-1 px-3 rounded-lg shadow-lg text-xs">
                    <p className="font-bold">8+ лет опыта</p>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">Богомолов Глеб</h3>
                  <p className="text-foreground/80 mb-4">
                    Специалист по автоматизации бизнес-процессов и GTM-инженерии с более чем 8-летним опытом работы. Помогаю бизнесам трансформировать их операционную эффективность через внедрение технологических решений.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="default" className="bg-tech-purple hover:bg-tech-purple/90" asChild>
                      <Link to="/about">Подробнее обо мне</Link>
                    </Button>
                    <Button variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-purple/10" onClick={() => window.open('/resume.pdf', '_blank')}>
                      Скачать резюме
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact section with black heading */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Мои контакты
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Готов обсудить ваш проект и предложить оптимальное решение. Свяжитесь со мной любым удобным способом.
              </p>
            </div>
            
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
