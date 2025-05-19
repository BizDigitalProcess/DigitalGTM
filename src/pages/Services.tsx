
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('development');
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
    development: [
      {
        name: "Бизнес под ключ",
        price: "от 150 000 ₽",
        description: "Премиум тариф",
        features: [
          "Комплексный аудит бизнес-процессов компании",
          "Разработка индивидуальной стратегии автоматизации",
          "Создание кастомного программного решения с уникальным функционалом",
          "Интеграция со всеми используемыми системами и сервисами",
          "Обучение персонала и документация по использованию",
          "Техническая поддержка 24/7 с гарантированным временем реакции",
          "Персональный проджект-менеджер и выделенная команда разработки"
        ],
        bonuses: [
          "Бесплатное составление детального ТЗ (экономия 30 000 руб.)",
          "3 месяца технической поддержки в подарок"
        ],
        popular: false
      },
      {
        name: "Быстрые результаты",
        price: "75 000 ₽",
        description: "Стандартный тариф",
        features: [
          "Аудит ключевых бизнес-процессов для автоматизации",
          "Разработка решения с настройкой под потребности бизнеса",
          "Интеграция с основными системами (до 3 сервисов)",
          "Базовое обучение персонала работе с системой",
          "Техническая поддержка в рабочее время"
        ],
        bonuses: [],
        popular: true
      },
      {
        name: "Эффективный старт",
        price: "от 35 000 ₽",
        description: "Базовый тариф",
        features: [
          "Автоматизация одного бизнес-процесса",
          "Настройка базового программного решения",
          "Минимальная интеграция с одним сервисом",
          "Базовая документация по использованию",
          "Техническая поддержка на запуск"
        ],
        bonuses: [],
        popular: false
      }
    ],
    chatbots: [
      {
        name: "AI-менеджер Pro",
        price: "85 000 ₽",
        description: "Премиум тариф",
        features: [
          "Разработка интеллектуального чат-бота с использованием передовых языковых моделей",
          "Полная интеграция с CRM (Bitrix24, amoCRM, Kommo, Yclients, Altegio)",
          "Подключение всех основных каналов: Telegram, WhatsApp, VK, сайт",
          "Несколько AI-агентов (квалификатор + консультант)",
          "Автоматизированное управление этапами сделки",
          "Сегментация лидов и автоматическая квалификация",
          "Стоимость обслуживания: 2000 руб. за каждых 2000 пользователей"
        ],
        bonuses: [
          "Интеграция с Avito (экономия 2 999 руб.)",
          "Кастомизация сценариев без дополнительной оплаты"
        ],
        popular: false
      },
      {
        name: "Продвинутый помощник",
        price: "45 000 ₽",
        description: "Стандартный тариф",
        features: [
          "Разработка чат-бота с базовыми AI-функциями",
          "Интеграция с основными CRM-системами",
          "Подключение до 3 каналов коммуникации на выбор",
          "Базовая аналитика и отчетность",
          "Автоматическое заполнение карточек клиентов",
          "Стоимость обслуживания: 2000 руб. за каждых 2000 пользователей"
        ],
        bonuses: [],
        popular: true
      },
      {
        name: "Умный ассистент",
        price: "20 000 ₽",
        description: "Базовый тариф",
        features: [
          "Разработка базового чат-бота для Telegram",
          "Интеграция с Google-календарем и Google-таблицами",
          "Подключение 1-2 каналов коммуникации",
          "Базовые сценарии автоматизации",
          "Стоимость обслуживания: 2000 руб. за 2000 пользователей"
        ],
        bonuses: [],
        popular: false
      }
    ],
    gtm: [
      {
        name: "Полный запуск",
        price: "120 000 ₽",
        description: "Премиум тариф",
        features: [
          "Разработка комплексной GTM стратегии с аналитикой рынка",
          "Настройка системы лидогенерации под ключ",
          "Автоматизация маркетинговых процессов",
          "Настройка расширенной аналитики и отчетности",
          "Создание и оптимизация воронки продаж",
          "Персональное курирование запуска проекта"
        ],
        bonuses: [
          "Разработка скриптов продаж и обучение персонала",
          "Лендинг по ведущим товарам\\услугам"
        ],
        popular: false
      },
      {
        name: "Быстрый старт",
        price: "60 000 ₽",
        description: "Стандартный тариф",
        features: [
          "Разработка базовой GTM стратегии",
          "Настройка Яндекс директ по тарифу Mini+Ретаргетинг+РСЯ+таргетинг",
          "Настройка GA на лендинг",
          "Создание воронки продаж",
          "Базовая аналитика с ежемесячными отчетами"
        ],
        bonuses: [],
        popular: true
      },
      {
        name: "Первый шаг",
        price: "30 000 ₽",
        description: "Базовый тариф",
        features: [
          "Консультация по GTM стратегии",
          "Разработка плана действий",
          "Настройка 1-2 каналов лидогенерации"
        ],
        bonuses: [],
        popular: false
      }
    ],
    outstaff: [
      {
        name: "Я весь твой",
        price: "300 000 ₽/мес.",
        description: "Премиум тариф",
        features: [
          "160 часов работы в месяц (полная занятость)",
          "Еженедельные отчеты о проделанной работе",
          "Приоритетная техническая поддержка"
        ],
        bonuses: [
          "Ежемесячный аудит и оптимизация процессов"
        ],
        popular: false
      },
      {
        name: "На половину твой",
        price: "150 000 ₽/мес.",
        description: "Стандартный тариф",
        features: [
          "80 часов работы в месяц (частичная занятость)",
          "Еженедельные отчеты и планирование задач"
        ],
        bonuses: [],
        popular: false
      },
      {
        name: "Твой по запросу",
        price: "80 000 ₽/мес.",
        description: "Базовый тариф",
        features: [
          "40 часов работы в месяц",
          "Ежемесячный отчет о выполненных задачах"
        ],
        bonuses: [],
        popular: true
      }
    ]
  };

  const additionalServices = [
    {
      title: "Парсинг сайтов",
      items: [
        { name: "от 1 до 10 сайтов", price: "4500 ₽ за сайт" },
        { name: "от 11 до 20 сайтов", price: "4000 ₽ за сайт" },
        { name: "от 21 и свыше", price: "3500 ₽ за сайт" }
      ]
    },
    {
      title: "Установка и настройка готового софта",
      items: [
        { name: "Базовая установка", price: "5 000 ₽" },
        { name: "Установка с настройкой", price: "10 000 ₽" },
        { name: "Комплексная установка с интеграцией", price: "20 000 ₽" }
      ]
    },
    {
      title: "Разработка Технического задания",
      items: [
        { name: "Базовое ТЗ", price: "5 000 ₽" },
        { name: "Стандартное ТЗ", price: "15 000 ₽" },
        { name: "Детальное ТЗ", price: "30 000 ₽" }
      ]
    },
    {
      title: "Внедрение и настройка CRM",
      items: [
        { name: "Базовая настройка", price: "20 000 ₽" },
        { name: "Стандартная настройка с интеграциями", price: "40 000 ₽" },
        { name: "Комплексное внедрение", price: "80 000 ₽" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Тарифная сетка</span> по оказанию IT-услуг автоматизации бизнеса
              </h1>
              <p className="text-lg text-foreground/80">
                Выберите оптимальное решение для вашего бизнеса с гарантированным возвратом инвестиций
              </p>
            </div>

            <Tabs defaultValue="development" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
              {/* Responsive tabs layout */}
              <div className="mb-8 overflow-x-auto">
                <TabsList className={`${isMobile ? 'flex' : 'grid grid-cols-5'} min-w-max w-full`}>
                  <TabsTrigger value="development" className="text-base py-3 flex-1">Разработка ПО и автоматизация</TabsTrigger>
                  <TabsTrigger value="chatbots" className="text-base py-3 flex-1">Разработка чат-ботов</TabsTrigger>
                  <TabsTrigger value="gtm" className="text-base py-3 flex-1">Go-To-Market инженерия</TabsTrigger>
                  <TabsTrigger value="outstaff" className="text-base py-3 flex-1">Аутстафф ИТ специалиста</TabsTrigger>
                  <TabsTrigger value="additional" className="text-base py-3 flex-1">Дополнительные услуги</TabsTrigger>
                </TabsList>
              </div>

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
                        <CardHeader className="pb-2">
                          <CardTitle>{tier.name}</CardTitle>
                          <CardDescription className="mt-2">{tier.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-5">
                            <div>
                              <h4 className="text-sm font-medium mb-3 text-foreground">Что входит:</h4>
                              <ul className="space-y-3">
                                {tier.features.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                                    <span className="ml-3 text-foreground/80">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {tier.bonuses.length > 0 && (
                              <div>
                                <h4 className="text-sm font-medium mb-3 text-foreground">Бонусы:</h4>
                                <ul className="space-y-3">
                                  {tier.bonuses.map((bonus, i) => (
                                    <li key={i} className="flex items-start">
                                      <Check className="h-5 w-5 text-tech-purple shrink-0" />
                                      <span className="ml-3 text-tech-purple font-medium">{bonus}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div className="mt-4 p-3 bg-tech-purple/10 rounded-lg text-center">
                              <span className="text-2xl font-bold text-tech-purple">{tier.price}</span>
                            </div>
                            
                            <div className="flex flex-col gap-3 pt-4">
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
                                onClick={() => window.open('https://t.me/CryF1sh', '_blank')}
                              >
                                Задать вопрос
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
              
              <TabsContent value="additional" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Дополнительные услуги</CardTitle>
                    <CardDescription>
                      Индивидуальные услуги для расширения ваших технических возможностей
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {additionalServices.map((service, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Услуга</TableHead>
                                <TableHead className="text-right">Стоимость</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {service.items.map((item, i) => (
                                <TableRow key={i}>
                                  <TableCell>{item.name}</TableCell>
                                  <TableCell className="text-right font-medium">{item.price}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-16">
              <p className="text-foreground/80 mb-6 max-w-3xl mx-auto">
                Не нашли подходящий тариф? Свяжитесь со мной для обсуждения индивидуального решения, которое максимально соответствует вашим бизнес-потребностям.
              </p>
              <Button 
                variant="default"
                className="bg-tech-orange hover:bg-tech-orange/90 flex items-center gap-2 group mx-auto px-8 py-6 text-lg"
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
