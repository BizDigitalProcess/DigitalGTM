
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    title: "Автоматизация отдела продаж",
    client: "E-commerce компания",
    description: "Разработка системы автоматизации процесса обработки заказов и управления запасами",
    metrics: [
      { label: "Экономия времени", value: "76%" },
      { label: "Сокращение ошибок", value: "94%" },
      { label: "ROI", value: "340%" }
    ],
    tags: ["CRM", "API-интеграции", "AI-рекомендации"],
    image: "/placeholder.svg"
  },
  {
    title: "Чат-бот для поддержки клиентов",
    client: "Телеком оператор",
    description: "Разработка и внедрение интеллектуального бота для автоматизации первичных обращений клиентов",
    metrics: [
      { label: "Автоматизировано запросов", value: "85%" },
      { label: "Повышение NPS", value: "+23" },
      { label: "Экономия на персонале", value: "₽1.2M/год" }
    ],
    tags: ["AI", "Чат-бот", "NLP"],
    image: "/placeholder.svg"
  },
  {
    title: "GTM настройка и оптимизация",
    client: "Маркетинговое агентство",
    description: "Создание комплексной системы отслеживания и аналитики для многоканальных рекламных кампаний",
    metrics: [
      { label: "Точность данных", value: "99.7%" },
      { label: "Оптимизация бюджета", value: "41%" },
      { label: "Рост ROAS", value: "2.8x" }
    ],
    tags: ["GTM", "Аналитика", "Автоматизация отчетов"],
    image: "/placeholder.svg"
  }
];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Портфолио</span> проектов
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Реальные примеры автоматизации и оптимизации бизнес-процессов с измеримыми результатами
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {cases.map((caseItem, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden tech-card transition-all duration-300 cursor-pointer ${activeIndex === index ? 'ring-2 ring-tech-purple' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-48">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-tech-orange text-white">{caseItem.client}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{caseItem.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{caseItem.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-tech-purple text-tech-purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  {caseItem.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-tech-purple font-bold">{metric.value}</p>
                      <p className="text-xs text-foreground/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="btn-primary flex items-center gap-2 group">
            Смотреть все проекты
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
