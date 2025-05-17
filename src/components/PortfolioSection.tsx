
import { useState } from "react";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const cases = [
  {
    title: "Автоматизация отдела продаж",
    client: "E-commerce компания",
    description: "Разработка системы автоматизации процесса обработки заказов и управления запасами",
    fullDescription: "Полная автоматизация процесса обработки заказов, от момента оформления до отгрузки товара. Интеграция с системой складского учёта, автоматическое обновление остатков, генерация отчётов по продажам и аналитика эффективности маркетинговых каналов. Внедрение предиктивной аналитики для прогнозирования спроса.",
    process: [
      "Анализ текущих бизнес-процессов и выявление узких мест",
      "Разработка архитектуры решения с учетом масштабирования",
      "Интеграция с существующими системами компании",
      "Внедрение и обучение персонала",
      "Поддержка и мониторинг работы системы"
    ],
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
    fullDescription: "Разработка интеллектуального чат-бота с использованием технологий машинного обучения и обработки естественного языка. Бот способен обрабатывать до 85% стандартных обращений клиентов без участия операторов, включая проверку баланса, смену тарифного плана, диагностику типовых проблем. Интеграция с CRM системой компании для доступа к истории взаимодействия с клиентом.",
    process: [
      "Анализ типовых обращений клиентов и формирование базы знаний",
      "Разработка алгоритмов распознавания намерений пользователя",
      "Интеграция с внутренними системами компании",
      "A/B тестирование и оптимизация сценариев диалога",
      "Непрерывное обучение модели на основе реальных диалогов"
    ],
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
    fullDescription: "Внедрение комплексной системы Google Tag Manager для отслеживания эффективности всех маркетинговых активностей. Настройка сложных триггеров и пользовательских переменных для точного измерения конверсий. Интеграция с Google Analytics, Facebook Pixel, Яндекс.Метрика и другими системами аналитики для создания централизованной отчетности.",
    process: [
      "Аудит текущей аналитической инфраструктуры",
      "Разработка стратегии отслеживания на основе бизнес-целей",
      "Настройка и тестирование тегов, триггеров и переменных",
      "Создание интерактивных дашбордов для анализа данных",
      "Обучение команды клиента работе с системой"
    ],
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
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);
  
  const openCaseDetails = (caseItem: typeof cases[0]) => {
    setSelectedCase(caseItem);
  };
  
  return (
    <section id="portfolio" className="py-16 md:py-24">
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
                
                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  {caseItem.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-tech-purple font-bold">{metric.value}</p>
                      <p className="text-xs text-foreground/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-tech-purple text-tech-purple hover:bg-tech-purple/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCaseDetails(caseItem);
                  }}
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="btn-primary flex items-center gap-2 group" asChild>
            <Link to="/portfolio">
              Смотреть все проекты
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Case details dialog */}
      <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center justify-between">
              <span>{selectedCase?.title}</span>
              <DialogClose className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted">
                <X size={18} />
              </DialogClose>
            </DialogTitle>
            <Badge className="w-fit bg-tech-orange text-white mb-2">
              {selectedCase?.client}
            </Badge>
            <DialogDescription className="text-base text-foreground">
              {selectedCase?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-3">Этапы проекта</h4>
            <ul className="space-y-2 mb-6">
              {selectedCase?.process.map((step, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-tech-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-medium mb-3">Результаты</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {selectedCase?.metrics.map((metric, i) => (
                <div key={i} className="p-4 bg-tech-purple/10 rounded-lg text-center">
                  <p className="text-tech-purple text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-foreground/80">{metric.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedCase?.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="border-tech-purple text-tech-purple">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
