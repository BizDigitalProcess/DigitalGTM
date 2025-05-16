
import { Settings, Link, Database, Bot, Code, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Settings className="w-10 h-10 text-tech-purple" />,
    title: "Автоматизация бизнес-процессов",
    description: "Оптимизирую и автоматизирую ваши рабочие процессы, устраняя рутинные операции и высвобождая ресурсы для стратегических задач.",
  },
  {
    icon: <Link className="w-10 h-10 text-tech-purple" />,
    title: "API-интеграции",
    description: "Создаю бесшовные интеграции между вашими системами и сервисами, обеспечивая синхронизацию данных и процессов.",
  },
  {
    icon: <Database className="w-10 h-10 text-tech-purple" />,
    title: "Внедрение CRM/ERP",
    description: "Настраиваю и оптимизирую системы управления бизнесом, адаптируя их под ваши уникальные потребности.",
  },
  {
    icon: <Bot className="w-10 h-10 text-tech-purple" />,
    title: "AI-ассистенты и чат-боты",
    description: "Разрабатываю интеллектуальных помощников, которые автоматизируют коммуникацию с клиентами и сотрудниками.",
  },
  {
    icon: <Code className="w-10 h-10 text-tech-purple" />,
    title: "Разработка ПО для автоматизации",
    description: "Создаю кастомные программные решения, точно соответствующие задачам вашего бизнеса.",
  },
  {
    icon: <Activity className="w-10 h-10 text-tech-purple" />,
    title: "GTM инженерия",
    description: "Внедряю и оптимизирую системы веб-аналитики для точного отслеживания эффективности маркетинга и продаж.",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-tech-light-gray/30 dark:from-tech-dark-bg dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Услуги</span> по автоматизации и оптимизации
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Комплексные решения для трансформации бизнес-процессов с использованием современных технологий и искусственного интеллекта
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="tech-card p-6 flex flex-col h-full group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-tech-purple/10 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-purple transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-foreground/70 flex-grow mb-4">
                {service.description}
              </p>
              <Button variant="ghost" className="text-tech-purple hover:text-tech-dark-purple hover:bg-tech-purple/10 p-0 justify-start">
                Подробнее
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-secondary">
            Все услуги и тарифы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
