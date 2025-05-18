
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('automation');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  const pricingTiers = {
    automation: [
      {
        name: "Базовый",
        price: "от 50 000 ₽",
        description: "Для компаний с простыми процессами",
        features: [
          "Автоматизация 1-2 ручных процессов",
          "Интеграция с 1-2 сервисами",
          "Базовая техническая поддержка",
          "Срок реализации: 1-2 недели"
        ],
        excludedFeatures: [
          "AI компоненты",
          "Сложные интеграции"
        ],
        popular: false
      },
      {
        name: "Бизнес",
        price: "от 150 000 ₽",
        description: "Для растущих компаний со средней сложностью процессов",
        features: [
          "Автоматизация 3-5 ручных процессов",
          "Интеграция с 3-5 сервисами",
          "Базовые AI компоненты",
          "Расширенная техническая поддержка",
          "Срок реализации: 2-4 недели",
          "ROI от 200% за 3 месяца"
        ],
        excludedFeatures: [],
        popular: true
      },
      {
        name: "Корпоративный",
        price: "от 350 000 ₽",
        description: "Для крупных компаний со сложными процессами",
        features: [
          "Автоматизация 5+ ручных процессов",
          "Интеграция с 5+ сервисами",
          "Продвинутые AI компоненты",
          "Персональный менеджер",
          "Срок реализации: 1-3 месяца",
          "ROI от 300% за 6 месяцев"
        ],
        excludedFeatures: [],
        popular: false
      }
    ],
    ai: [
      {
        name: "Стартовый AI",
        price: "от 100 000 ₽",
        description: "Базовые AI решения для бизнеса",
        features: [
          "Чат-бот с базой знаний",
          "Интеграция с 1 источником данных",
          "Базовая обучающая выборка",
          "Техническая поддержка",
          "Срок реализации: 2-3 недели"
        ],
        excludedFeatures: [
          "Обработка сложных запросов",
          "Персонализация"
        ],
        popular: false
      },
      {
        name: "Продвинутый AI",
        price: "от 250 000 ₽",
        description: "Комплексные AI решения для оптимизации бизнес-процессов",
        features: [
          "Умный помощник с обучением",
          "Интеграция с 3+ источниками данных",
          "Персонализация под пользователей",
          "Расширенная техническая поддержка",
          "Срок реализации: 1-2 месяца",
          "ROI от 250% за 4 месяца"
        ],
        excludedFeatures: [],
        popular: true
      },
      {
        name: "Корпоративный AI",
        price: "от 500 000 ₽",
        description: "Масштабные AI решения для крупных компаний",
        features: [
          "Комплексная AI экосистема",
          "Интеграция с любыми источниками данных",
          "Персонализация и адаптация под бизнес",
          "Персональная команда поддержки",
          "Срок реализации: 2-4 месяца",
          "ROI от 350% за 6 месяцев"
        ],
        excludedFeatures: [],
        popular: false
      }
    ],
    gtm: [
      {
        name: "GTM Базовый",
        price: "от 80 000 ₽",
        description: "Базовая настройка GTM для малого бизнеса",
        features: [
          "Базовая настройка Google Tag Manager",
          "Отслеживание до 5 целей",
          "Базовая аналитика",
          "Срок реализации: 1-2 недели"
        ],
        excludedFeatures: [
          "Продвинутая сегментация",
          "Интеграция с CRM"
        ],
        popular: false
      },
      {
        name: "GTM Продвинутый",
        price: "от 150 000 ₽",
        description: "Комплексная настройка GTM для среднего бизнеса",
        features: [
          "Продвинутая настройка Google Tag Manager",
          "Отслеживание до 15 целей",
          "Интеграция с CRM",
          "Сегментация аудитории",
          "Срок реализации: 2-3 недели",
          "ROI от 220% за 3 месяца"
        ],
        excludedFeatures: [],
        popular: true
      },
      {
        name: "GTM Корпоративный",
        price: "от 300 000 ₽",
        description: "Полный комплекс GTM услуг для крупных компаний",
        features: [
          "Комплексная настройка Google Tag Manager",
          "Отслеживание неограниченного числа целей",
          "Интеграция с любыми системами",
          "Персональная команда поддержки",
          "Срок реализации: 3-6 недель",
          "ROI от 280% за 6 месяцев"
        ],
        excludedFeatures: [],
        popular: false
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Услуги</span> и тарифы
              </h1>
              <p className="text-lg text-foreground/80">
                Выберите оптимальное решение для вашего бизнеса с гарантированным возвратом инвестиций
              </p>
            </div>

            <Tabs defaultValue="automation" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
              <TabsList className={`grid w-full ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3'} mb-8`}>
                <TabsTrigger value="automation" className="text-base py-3">Автоматизация процессов</TabsTrigger>
                <TabsTrigger value="ai" className="text-base py-3">AI решения</TabsTrigger>
                <TabsTrigger value="gtm" className="text-base py-3">GTM Engineering</TabsTrigger>
              </TabsList>

              {Object.keys(pricingTiers).map((key) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingTiers[key].map((tier, index) => (
                      <Card key={index} className={`relative overflow-hidden ${tier.popular ? 'border-tech-purple shadow-lg' : ''}`}>
                        {tier.popular && (
                          <div className="absolute top-0 right-0 bg-tech-purple text-white px-3 py-1 text-sm font-medium">
                            Популярный
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{tier.name}</CardTitle>
                          <div className="mt-4 flex items-baseline text-foreground">
                            <span className="text-3xl font-extrabold tracking-tight">{tier.price}</span>
                          </div>
                          <CardDescription className="mt-2">{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-5">
                            <div>
                              <ul className="space-y-3">
                                {tier.features.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                                    <span className="ml-3 text-foreground/80">{feature}</span>
                                  </li>
                                ))}
                                {tier.excludedFeatures.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <X className="h-5 w-5 text-red-500 shrink-0" />
                                    <span className="ml-3 text-foreground/60">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col gap-3">
                              <Button 
                                variant="default"
                                className="bg-tech-purple hover:bg-tech-purple/90 w-full"
                                onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}
                              >
                                Записаться на консультацию
                              </Button>
                              <Button 
                                variant="outline" 
                                className="border-tech-purple text-tech-purple hover:bg-tech-purple/10 w-full"
                                onClick={() => window.location.href = `#pricing-details-${key}-${index}`}
                              >
                                Подробнее
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center mt-16">
              <p className="text-foreground/80 mb-6 max-w-3xl mx-auto">
                Не нашли подходящий тариф? Свяжитесь со мной для обсуждения индивидуального решения, которое максимально соответствует вашим бизнес-потребностям.
              </p>
              <Button 
                variant="default"
                className="bg-tech-purple hover:bg-tech-purple/90 flex items-center gap-2 group"
                onClick={() => window.open('https://t.me/CryF1sh', '_blank')}
              >
                Обсудить индивидуальный проект
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
