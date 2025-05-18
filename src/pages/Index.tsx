
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
        <ServicesSection />
        <MetricsSection />
        
        {/* Combined About and Contact sections */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Обо <span className="gradient-text">мне</span>
              </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left side: About me */}
              <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center gap-8">
                {/* Image */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 relative flex-shrink-0">
                  <div className="rounded-full overflow-hidden shadow-lg">
                    <img 
                      src="/lovable-uploads/03a35695-ef86-4301-b561-62513f166123.png" 
                      alt="GTM и автоматизация специалист" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute -bottom-2 -right-2 bg-tech-purple text-white py-1 px-3 rounded-lg shadow-lg">
                    <p className="font-bold text-sm">8+ лет опыта</p>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <p className="text-lg text-foreground/80 mb-4">
                    Я специалист по автоматизации бизнес-процессов и GTM-инженерии с более чем 8-летним опытом работы. Помогаю бизнесам всех размеров трансформировать их операционную эффективность через внедрение современных технологических решений.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-primary" asChild>
                      <Link to="/about">Подробнее обо мне</Link>
                    </Button>
                    <Button variant="outline" className="border-tech-purple text-tech-purple hover:bg-tech-purple/10" onClick={() => window.open('/resume.pdf', '_blank')}>
                      Скачать резюме
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Right side: Contact info */}
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <h3 className="text-2xl font-semibold mb-6">Свяжитесь со мной</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="tech-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-tech-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tech-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Email</p>
                      <p className="font-medium">glebbogomolov04@gmail.com</p>
                    </div>
                    <Button variant="ghost" className="ml-auto text-tech-purple hover:bg-tech-purple/10" onClick={() => window.open('mailto:glebbogomolov04@gmail.com')}>
                      Написать
                    </Button>
                  </div>
                  
                  {/* Telegram */}
                  <div className="tech-card p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-tech-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tech-purple" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.1.46-.325 2.089-.461 3.104l-.65 4.299c-.051.344-.183.453-.304.462-.259.02-.572-.135-.885-.27-.49-.21-1.464-.763-2.088-1.177-.302-.2-.74-.61.051-1.08.291-.169 2.11-1.958 2.202-2.134.011-.02.022-.102-.039-.145-.06-.044-.148-.027-.211-.016-.09.017-1.524.981-4.301 2.891-.305.209-.597.31-.877.302-.289-.009-.845-.155-1.257-.282-.507-.158-1-.3-.961-.635.02-.168.25-.336.572-.511 2.246-1.003 3.743-1.668 4.494-1.993 2.139-.932 2.584-1.094 2.872-1.099.064-.001.208.016.299.086.078.062.1.144.111.204.032.155.017.362.002.51z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Telegram</p>
                      <p className="font-medium">@CryF1sh</p>
                    </div>
                    <Button variant="ghost" className="ml-auto text-tech-purple hover:bg-tech-purple/10" onClick={() => window.open('https://t.me/CryF1sh', '_blank')}>
                      Написать
                    </Button>
                  </div>
                  
                  {/* Telegram Bot */}
                  <div className="tech-card p-4 flex items-center gap-3 md:col-span-2">
                    <div className="w-10 h-10 bg-tech-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-tech-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm text-foreground/60 mb-1">Запись на консультацию</p>
                      <p className="font-medium">Telegram-бот для записи на бесплатную консультацию</p>
                    </div>
                    <Button variant="primary" className="btn-primary" onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}>
                      Записаться
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
