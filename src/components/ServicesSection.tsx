
import { Settings, Link, Database, Bot, Code, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const services = [
  {
    icon: <Settings className="w-10 h-10 text-tech-purple" />,
    title: "Автоматизация бизнес-процессов",
    description: "Увеличьте прибыль на 30-45% через устранение рутинных операций и оптимизацию рабочих процессов.",
    details: "Комплексная автоматизация бизнес-процессов не просто устраняет рутину, но и обеспечивает измеримый финансовый результат. После внедрения наших решений клиенты отмечают рост прибыли на 30-45% за счет сокращения операционных затрат на 60-80%, ускорения выполнения стандартных операций в 3-5 раз и повышения точности исполнения на 99%. Инвестируя в автоматизацию сейчас, вы получаете гарантированный ROI до 300% в течение первого года.",
    roi: "Инвестиции от 150 000 ₽ — дополнительная прибыль до 450 000 ₽ в первый год"
  },
  {
    icon: <Link className="w-10 h-10 text-tech-purple" />,
    title: "API-интеграции",
    description: "Синхронизируйте данные между системами и увеличьте эффективность команды на 40%, избавившись от ручного ввода данных.",
    details: "API-интеграции позволяют объединить все ваши системы в единую экосистему с автоматическим обменом данными. Наши клиенты получают реальную экономию до 40 человеко-часов в неделю на каждого сотрудника, работающего с данными, полностью исключают ошибки при переносе информации и ускоряют бизнес-процессы на 70%. При средней стоимости часа работы специалиста в 1500 ₽, экономия составляет около 240 000 ₽ в месяц на команду из 10 человек.",
    roi: "Инвестиции от 100 000 ₽ — экономия до 240 000 ₽ ежемесячно"
  },
  {
    icon: <Database className="w-10 h-10 text-tech-purple" />,
    title: "Внедрение CRM/ERP",
    description: "Увеличьте продажи на 35% и сократите цикл сделки на 50% благодаря автоматизации работы с клиентами и заказами.",
    details: "Внедрение современных CRM/ERP систем под ваши бизнес-процессы обеспечивает полный контроль над всеми аспектами бизнеса. Наши клиенты отмечают рост продаж в среднем на 35% за счет систематизации работы с лидами, сокращение цикла сделки на 50% благодаря автоматизации рутинных задач и увеличение повторных продаж на 42%. В финансовом выражении средний прирост выручки составляет 30-40% в первый год после внедрения.",
    roi: "Инвестиции от 200 000 ₽ — дополнительная выручка от 600 000 ₽ ежемесячно при обороте от 5 млн ₽"
  },
  {
    icon: <Bot className="w-10 h-10 text-tech-purple" />,
    title: "AI-ассистенты и чат-боты",
    description: "Автоматизируйте до 80% типовых обращений клиентов и сэкономьте до 450 000 ₽ ежемесячно на службе поддержки.",
    details: "Современные AI-ассистенты и чат-боты — это не просто автоответчики, а полноценные виртуальные сотрудники. Они способны автоматизировать до 80% типовых обращений, работать 24/7 без перерывов и выходных, предоставлять мгновенные ответы и увеличивать конверсию в продажи на 25-40%. При средней стоимости услуг одного сотрудника поддержки в 60 000 ₽ и необходимости нескольких смен для круглосуточной работы, экономия составляет до 450 000 ₽ ежемесячно.",
    roi: "Инвестиции от 150 000 ₽ — экономия до 450 000 ₽ ежемесячно + рост продаж на 25-40%"
  },
  {
    icon: <Code className="w-10 h-10 text-tech-purple" />,
    title: "Разработка ПО для автоматизации",
    description: "Получите уникальное решение с ROI 300-400% для автоматизации специфических бизнес-процессов вашей компании.",
    details: "Индивидуальная разработка программного обеспечения позволяет создать решение, идеально соответствующее уникальным процессам вашего бизнеса. Наши клиенты получают системы, автоматизирующие именно те процессы, которые создают наибольшую нагрузку или являются узким местом. В среднем, такие решения обеспечивают ROI 300-400% в первый год использования за счет повышения эффективности работы на 60-80% и исключения человеческого фактора.",
    roi: "Инвестиции от 300 000 ₽ — возврат инвестиций 300-400% в первый год"
  },
  {
    icon: <Activity className="w-10 h-10 text-tech-purple" />,
    title: "GTM инженерия",
    description: "Увеличьте эффективность маркетингового бюджета на 45% и точность атрибуции до 97% через профессиональную настройку аналитики.",
    details: "GTM инженерия обеспечивает полную прозрачность эффективности всех маркетинговых каналов и точное отслеживание пользовательского пути. Наши клиенты увеличивают ROAS (возврат инвестиций в рекламу) в среднем на 45% за счет перераспределения бюджета на наиболее эффективные каналы, повышают точность атрибуции до 97% и получают возможность прогнозировать результаты маркетинговых кампаний с точностью до 85-90%. При маркетинговом бюджете от 300 000 ₽, оптимизация дает экономию от 135 000 ₽ ежемесячно.",
    roi: "Инвестиции от 80 000 ₽ — экономия до 45% маркетингового бюджета"
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
            Конкретные финансовые результаты для вашего бизнеса с измеримым ROI и гарантией окупаемости от 2 недель до 3 месяцев
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
              <div className="flex flex-col gap-2 mt-auto">
                <Button 
                  className="btn-primary"
                  onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}
                >
                  Записаться на консультацию
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-tech-purple hover:text-tech-dark-purple hover:bg-tech-purple/10"
                  onClick={() => openServiceDetails(service)}
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl sm:max-w-3xl">
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
                
                <div className="mt-6 p-4 bg-tech-purple/10 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Конкретный финансовый результат:</h4>
                  <p className="text-tech-purple font-medium">{selectedService.roi}</p>
                </div>
                
                <div className="mt-6">
                  <Button className="btn-primary w-full sm:w-auto" onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}>
                    Записаться на консультацию
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
