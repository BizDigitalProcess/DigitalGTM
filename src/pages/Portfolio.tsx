
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';

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
                <span className="gradient-text">Отзывы</span> клиентов
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="tech-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-tech-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-tech-purple">АК</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Александр Ковалев</h4>
                      <p className="text-sm text-foreground/60">CEO, ТехноСтарт</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    "Автоматизация наших процессов позволила сократить время обработки заказов на 75%. Сотрудники больше не тратят время на рутинные операции, а клиенты получают мгновенный отклик на запросы."
                  </p>
                </div>
                
                <div className="tech-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-tech-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-tech-purple">МВ</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Марина Васильева</h4>
                      <p className="text-sm text-foreground/60">Руководитель отдела продаж, АльфаТрейд</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    "Внедрение CRM и автоматизация маркетинга позволили нам увеличить конверсию на 40%. Теперь мы точно знаем, какие каналы привлечения работают лучше всего, и можем оптимизировать бюджет."
                  </p>
                </div>
                
                <div className="tech-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-tech-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-tech-purple">ДК</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Дмитрий Карпов</h4>
                      <p className="text-sm text-foreground/60">Директор по развитию, ЭкоСистемс</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    "Благодаря внедрению чат-бота мы смогли автоматизировать 80% типовых обращений клиентов. Это разгрузило службу поддержки и позволило сосредоточиться на решении сложных вопросов."
                  </p>
                </div>
                
                <div className="tech-card p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-tech-purple/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-tech-purple">ОП</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Ольга Павлова</h4>
                      <p className="text-sm text-foreground/60">Основатель, Beauty Market</p>
                    </div>
                  </div>
                  <p className="text-foreground/80">
                    "Интеграция наших систем позволила создать единую экосистему, где данные мгновенно синхронизируются между отделами. Это ускорило принятие решений и улучшило клиентский опыт."
                  </p>
                </div>
              </div>
              
              <Button className="btn-primary mt-12">Запросить расширенное портфолио</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
