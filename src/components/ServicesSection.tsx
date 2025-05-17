
import { Settings, Link, Database, Bot, Code, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const services = [
  {
    icon: <Settings className="w-10 h-10 text-tech-purple" />,
    title: "Автоматизация бизнес-процессов",
    description: "Оптимизирую и автоматизирую ваши рабочие процессы, устраняя рутинные операции и высвобождая ресурсы для стратегических задач.",
    details: "Комплексная автоматизация бизнес-процессов включает анализ текущих операций, выявление узких мест и разработку индивидуальных решений. Я использую современные инструменты для устранения рутинных задач, что позволяет вашим сотрудникам сосредоточиться на стратегических инициативах. Это приводит к экономии до 80% времени, сокращению операционных затрат и повышению общей эффективности бизнеса."
  },
  {
    icon: <Link className="w-10 h-10 text-tech-purple" />,
    title: "API-интеграции",
    description: "Создаю бесшовные интеграции между вашими системами и сервисами, обеспечивая синхронизацию данных и процессов.",
    details: "API-интеграции — это ключевой элемент любой современной бизнес-экосистемы. Я разрабатываю надежные соединения между различными платформами, системами и сервисами, обеспечивая бесшовную передачу данных. Это позволяет автоматизировать обмен информацией, синхронизировать процессы и исключить дублирование ввода данных. Результат — единая информационная среда, работающая как точно настроенный механизм."
  },
  {
    icon: <Database className="w-10 h-10 text-tech-purple" />,
    title: "Внедрение CRM/ERP",
    description: "Настраиваю и оптимизирую системы управления бизнесом, адаптируя их под ваши уникальные потребности.",
    details: "Внедрение CRM/ERP систем требует глубокого понимания бизнес-процессов и потребностей компании. Я провожу тщательный анализ вашей организации, подбираю оптимальное решение и адаптирую его под специфику вашего бизнеса. Процесс включает настройку, интеграцию с существующими системами, миграцию данных и обучение персонала. Результатом является централизованная система управления, которая объединяет все аспекты вашего бизнеса."
  },
  {
    icon: <Bot className="w-10 h-10 text-tech-purple" />,
    title: "AI-ассистенты и чат-боты",
    description: "Разрабатываю интеллектуальных помощников, которые автоматизируют коммуникацию с клиентами и сотрудниками.",
    details: "AI-ассистенты и чат-боты — это эффективный способ автоматизации коммуникаций. Я создаю интеллектуальные решения, способные отвечать на вопросы клиентов, собирать информацию, проводить первичные консультации и решать типовые задачи. Использование современных технологий машинного обучения позволяет создавать ассистентов, которые постоянно совершенствуются и адаптируются к новым запросам. Это значительно снижает нагрузку на службу поддержки и повышает скорость обработки обращений."
  },
  {
    icon: <Code className="w-10 h-10 text-tech-purple" />,
    title: "Разработка ПО для автоматизации",
    description: "Создаю кастомные программные решения, точно соответствующие задачам вашего бизнеса.",
    details: "Когда готовые решения не подходят для ваших специфических бизнес-процессов, я разрабатываю кастомное программное обеспечение. Процесс включает детальный анализ требований, проектирование архитектуры, разработку, тестирование и внедрение. Создаваемые решения полностью соответствуют уникальным потребностям вашего бизнеса, обеспечивают максимальную эффективность и гибкость, а также легко масштабируются вместе с ростом компании."
  },
  {
    icon: <Activity className="w-10 h-10 text-tech-purple" />,
    title: "GTM инженерия",
    description: "Внедряю и оптимизирую системы веб-аналитики для точного отслеживания эффективности маркетинга и продаж.",
    details: "GTM инженерия — это настройка и оптимизация Google Tag Manager и систем аналитики для эффективного сбора и анализа данных о поведении пользователей. Я создаю комплексные решения для отслеживания маркетинговых кампаний, воронок продаж и пользовательского опыта. Это позволяет принимать обоснованные бизнес-решения, оптимизировать маркетинговые расходы и повышать конверсию. Результатом является полная прозрачность эффективности всех каналов привлечения и взаимодействия с клиентами."
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const openServiceDetails = (service) => {
    setSelectedService(service);
    setDialogOpen(true);
  };
  
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
              <Button 
                variant="ghost" 
                className="text-tech-purple hover:text-tech-dark-purple hover:bg-tech-purple/10 p-0 justify-start"
                onClick={() => openServiceDetails(service)}
              >
                Подробнее
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-secondary" asChild>
            <a href="/services">Все услуги и тарифы</a>
          </Button>
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-tech-purple/10 rounded-lg">
                    {selectedService.icon}
                  </div>
                  <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription className="text-foreground/70">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-foreground">
                <p className="text-lg leading-relaxed">{selectedService.details}</p>
                <div className="mt-6">
                  <Button className="btn-primary w-full sm:w-auto" asChild>
                    <a href="/services">Узнать больше об услуге</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
