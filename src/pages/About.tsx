
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <AboutSection />
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Моя история
              </h2>
              
              <div className="prose prose-lg dark:prose-invert">
                <h3 className="text-2xl font-semibold mb-4">Богомолов Глеб</h3>

                <p>
                  Более 8 лет я изучаю IT сферу, а последние годы помогаю бизнесам разного масштаба оптимизировать их процессы и внедрять современные технологические решения. Моя специализация — создание систем, которые оказывают измеримый результат для бизнеса.
                </p>
                
                <p>
                  Начав свой путь как разработчик, я быстро понял, что настоящая ценность технологий раскрывается только тогда, когда они приносят прямую ценность и правильно интегрированы в бизнес-процессы. Это привело меня к и изучению методологий оптимизации и автоматизации.
                </p>
                
                <p>
                  За свою карьеру я реализовал более 30 проектов в различных отраслях: от малого бизнеса до крупных компаний. Каждый проект — это новый вызов и возможность создать что-то по-настоящему ценное для клиента.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Мой подход</h3>
                
                <p>
                  Я убежден, что успешная автоматизация начинается с глубокого понимания бизнес-процессов. Поэтому каждый проект я начинаю с тщательного анализа текущей ситуации, выявления узких мест и определения ключевых показателей эффективности.
                </p>
                
                <p>
                  Только после этого подбираются подходящие технологические решения и разрабатывается план внедрения. Такой подход гарантирует, что автоматизация действительно решает реальные проблемы бизнеса и приносит измеримый результат.
                </p>
                
                <div className="mt-8 text-center">
                  <Button className="bg-tech-purple hover:bg-tech-purple/90" onClick={() => window.open('/resume.pdf', '_blank')}>
                    Скачать резюме
                  </Button>
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

export default About;
