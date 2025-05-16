
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "N8N, .NET, Python, 1C",
  "API интеграции (REST, GraphQL)",
  "Автоматизация GTM и систем аналитики",
  "Разработка чат-ботов и AI ассистентов",
  "Интеграция CRM/ERP систем",
  "Оптимизация бизнес-процессов"
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-full overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/03a35695-ef86-4301-b561-62513f166123.png" 
                alt="GTM и автоматизация специалист" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-tech-purple text-white py-3 px-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl">7+ лет опыта</p>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Обо <span className="gradient-text">мне</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6">
              Я специалист по автоматизации бизнес-процессов и GTM-инженерии с более чем 7-летним опытом работы. Помогаю бизнесам всех размеров трансформировать их операционную эффективность через внедрение современных технологических решений.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8">
              Моя цель — создавать системы, которые не просто автоматизируют рутину, но и обеспечивают измеримый результат для бизнеса: сокращение затрат, повышение эффективности и масштабирование без роста операционных издержек.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Ключевые навыки:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-tech-purple" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="btn-primary">
              Подробнее о моем опыте и подходе
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
