
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <ServicesSection />
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="gradient-text">Тарифы</span> и пакеты услуг
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="tech-card p-6 flex flex-col h-full">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold mb-2">Базовый</h3>
                    <div className="text-3xl font-bold text-tech-purple">от 50 000 ₽</div>
                    <p className="text-sm text-foreground/60 mt-1">Разовый проект</p>
                  </div>
                  
                  <ul className="mt-4 mb-6 space-y-3 flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Аудит текущих процессов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Автоматизация 1 бизнес-процесса</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Базовая интеграция систем</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Обучение персонала</span>
                    </li>
                  </ul>
                  
                  <Button className="btn-primary w-full mt-auto">Подробнее</Button>
                </div>
                
                <div className="tech-card p-6 flex flex-col h-full relative border-tech-purple">
                  <div className="absolute -top-4 right-4 bg-tech-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                  
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold mb-2">Стандарт</h3>
                    <div className="text-3xl font-bold text-tech-purple">от 120 000 ₽</div>
                    <p className="text-sm text-foreground/60 mt-1">Комплексный проект</p>
                  </div>
                  
                  <ul className="mt-4 mb-6 space-y-3 flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Всё из тарифа Базовый</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Автоматизация до 3 бизнес-процессов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Интеграция CRM/ERP системы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Настройка аналитики и отчетности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Поддержка 30 дней после внедрения</span>
                    </li>
                  </ul>
                  
                  <Button className="btn-primary w-full mt-auto">Подробнее</Button>
                </div>
                
                <div className="tech-card p-6 flex flex-col h-full">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold mb-2">Премиум</h3>
                    <div className="text-3xl font-bold text-tech-purple">от 250 000 ₽</div>
                    <p className="text-sm text-foreground/60 mt-1">Полное сопровождение</p>
                  </div>
                  
                  <ul className="mt-4 mb-6 space-y-3 flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Всё из тарифа Стандарт</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Комплексная автоматизация всех процессов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Разработка кастомных решений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>AI-ассистенты и чат-боты</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Постоянная техническая поддержка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tech-purple font-bold">✓</span>
                      <span>Ежемесячные обновления и оптимизации</span>
                    </li>
                  </ul>
                  
                  <Button className="btn-primary w-full mt-auto">Подробнее</Button>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-foreground/70 mb-6">
                  Не нашли подходящий тариф? Свяжитесь со мной для создания индивидуального предложения.
                </p>
                <Button className="btn-secondary">Получить индивидуальное предложение</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
