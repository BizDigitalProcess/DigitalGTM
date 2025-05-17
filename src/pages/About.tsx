
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <AboutSection />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">
                <span className="gradient-text">Моя</span> история
              </h2>
              
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Более 8 лет я помогаю бизнесам разного масштаба оптимизировать их процессы и внедрять современные технологические решения. Моя специализация — создание систем, которые не просто работают, а приносят измеримый результат.
                </p>
                
                <p>
                  Начав свой путь как разработчик, я быстро понял, что настоящая ценность технологий раскрывается только тогда, когда они правильно интегрированы в бизнес-процессы. Это привело меня к изучению методологий оптимизации и автоматизации.
                </p>
                
                <p>
                  За свою карьеру я реализовал более 100 проектов в различных отраслях: от малого бизнеса до крупных корпораций. Каждый проект — это новый вызов и возможность создать что-то по-настоящему ценное для клиента.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Профессиональный опыт</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-tech-purple pl-4">
                    <h4 className="font-semibold">IT Business Automation | .NET Backend Developer | SaaS & API Integrations</h4>
                    <p className="text-sm text-foreground/70">Февраль 2025 - настоящее время</p>
                    <p>Freelance. Создание умных IT-решений для масштабирования бизнеса и автоматизации процессов.</p>
                  </div>
                  
                  <div className="border-l-4 border-tech-purple pl-4">
                    <h4 className="font-semibold">IT Business Developer в CopySpace</h4>
                    <p className="text-sm text-foreground/70">Декабрь 2024 - Март 2025</p>
                    <p>Развитие IT-отдела, форматирование отдела продаж, автоматизация процессов, оптимизация продаж и интеграция CRM.</p>
                  </div>
                  
                  <div className="border-l-4 border-tech-purple pl-4">
                    <h4 className="font-semibold">.NET Developer в FoxLab</h4>
                    <p className="text-sm text-foreground/70">Июнь 2024 - настоящее время</p>
                    <p>Разработка масштабируемых решений для B2B и B2C клиентов.</p>
                  </div>
                  
                  <div className="border-l-4 border-tech-purple pl-4">
                    <h4 className="font-semibold">Junior .NET Developer</h4>
                    <p className="text-sm text-foreground/70">Ноябрь 2023 - Июнь 2024</p>
                    <p>Работа над проектами с использованием .NET, ASP.NET MVC и PostgreSQL.</p>
                  </div>
                  
                  <div className="border-l-4 border-tech-purple pl-4">
                    <h4 className="font-semibold">Стажировки</h4>
                    <p className="text-sm text-foreground/70">Ранее</p>
                    <p>2 стажировки в Maxim technology & Гос. Оборон. Промышленном предприятии</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Образование</h3>
                <div className="border-l-4 border-tech-purple pl-4">
                  <h4 className="font-semibold">Специалист информационных систем, ВПМТ</h4>
                  <p className="text-sm text-foreground/70">Сентябрь 2020 - Июнь 2024</p>
                  <p>Диплом с отличием</p>
                </div>
                
                <div className="mt-8 text-center">
                  <Button className="btn-primary" onClick={() => window.open('/resume.pdf', '_blank')}>
                    Скачать резюме
                  </Button>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Мой подход</h3>
                
                <p>
                  Я убежден, что успешная автоматизация начинается с глубокого понимания бизнес-процессов. Поэтому каждый проект я начинаю с тщательного анализа текущей ситуации, выявления узких мест и определения ключевых показателей эффективности.
                </p>
                
                <p>
                  Только после этого подбираются подходящие технологические решения и разрабатывается план внедрения. Такой подход гарантирует, что автоматизация действительно решает реальные проблемы бизнеса и приносит измеримый результат.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
