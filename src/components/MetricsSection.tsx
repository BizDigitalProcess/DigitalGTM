
import { useState } from 'react';
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type MetricCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
};

const MetricCard = ({ icon, title, value, description }: MetricCardProps) => (
  <div className="tech-card p-6 flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
    <div className="mb-4 p-3 bg-tech-purple/10 rounded-lg inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold text-tech-purple mb-3">{value}</p>
    <p className="text-foreground/70 flex-grow">{description}</p>
  </div>
);

const faqData = [
  {
    question: "Какие сроки внедрения автоматизации?",
    answer: "В зависимости от сложности проекта, сроки могут варьироваться от 2 недель до 3 месяцев. Базовые решения, такие как настройка CRM или разработка чат-бота, занимают около 2-4 недель. Комплексные проекты с интеграцией нескольких систем могут требовать 2-3 месяца.",
  },
  {
    question: "Как быстро окупится внедрение автоматизации?",
    answer: "В среднем, окупаемость происходит за 3-6 месяцев. В некоторых случаях, особенно при автоматизации критичных и трудоемких процессов, ROI может достигать 300-400% в первый год. Мы предоставляем детальные расчеты окупаемости перед началом проекта.",
  },
  {
    question: "Можно ли интегрировать новую систему с существующими решениями?",
    answer: "Да, это одно из наших ключевых преимуществ. Мы специализируемся на интеграции различных систем и сервисов, включая CRM, ERP, бухгалтерское ПО, API маркетплейсов и другие решения. Наш опыт позволяет создать единую экосистему из разрозненных программных продуктов.",
  },
  {
    question: "Какую поддержку вы оказываете после внедрения?",
    answer: "После внедрения мы предоставляем техническую поддержку, обучение персонала и документацию. В зависимости от выбранного тарифа, поддержка может включать оперативное реагирование на запросы 24/7, регулярные обновления системы и консультации по дальнейшей оптимизации.",
  },
  {
    question: "Есть ли гарантия на результат?",
    answer: "Да, мы предоставляем гарантию на все разработанные решения. Кроме того, перед началом работы мы четко определяем измеримые KPI, которых планируем достичь. Оплата финального этапа проекта происходит только после демонстрации достигнутых результатов.",
  },
];

const MetricsSection = () => {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-tech-light-gray/20 to-white dark:from-tech-dark-bg dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Измеримые результаты автоматизации
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Внедряем в ваш бизнес системы, которые экономят до 80% времени на рутинных задачах и увеличивают чистую прибыль на 30-45% уже в первые месяцы
          </p>
        </div>
        
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="tech-card p-8 text-center backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-tech-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 20L13 4M13 4L7 10M13 4L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-tech-purple mb-2">3-7x</h3>
            <p className="text-sm text-foreground/70">рост производительности после внедрения автоматизации</p>
          </div>
          
          <div className="tech-card p-8 text-center backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-tech-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6L12 12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-tech-purple mb-2">80%</h3>
            <p className="text-sm text-foreground/70">экономия времени на рутинных операциях</p>
          </div>
          
          <div className="tech-card p-8 text-center backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-tech-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-tech-purple mb-2">300%</h3>
            <p className="text-sm text-foreground/70">средний ROI проектов автоматизации</p>
          </div>
          
          <div className="tech-card p-8 text-center backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-tech-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L9 16L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-tech-purple mb-2">99%</h3>
            <p className="text-sm text-foreground/70">точность исполнения автоматизированных процессов</p>
          </div>
        </div>
        
        {/* Comparison table with cost comparison */}
        <div className="tech-card p-8 mb-16 backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-white/10 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Сравнение с традиционными подходами</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
              <h4 className="text-lg font-medium mb-3 text-center">Срок окупаемости</h4>
              <div className="bg-tech-purple/20 p-4 rounded-lg text-center">
                <p className="text-tech-purple font-bold">от 2 недель до 3 месяцев</p>
              </div>
            </div>
            
            <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
              <h4 className="text-lg font-medium mb-3 text-center">Затраты на персонал</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-tech-purple/20 p-2 rounded-lg text-center">
                  <p className="text-xs text-foreground/80 mb-1">AI-решение</p>
                  <p className="text-tech-purple font-bold">от 30 000 ₽</p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-center">
                  <p className="text-xs text-foreground/80 mb-1">Сотрудник</p>
                  <p className="font-bold">от 120 000 ₽/мес</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white/10 dark:bg-black/20 rounded-lg">
              <h4 className="text-lg font-medium mb-3 text-center">Снижение операционных затрат</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-tech-purple/20 p-2 rounded-lg text-center">
                  <p className="text-xs text-foreground/80 mb-1">С автоматизацией</p>
                  <p className="text-tech-purple font-bold">45-60%</p>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-center">
                  <p className="text-xs text-foreground/80 mb-1">Без автоматизации</p>
                  <p className="font-bold">20-35%</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-foreground/60 mt-6">
            Результаты могут отличаться в зависимости от сложности процессов, масштаба бизнеса и уровня текущей автоматизации
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Часто задаваемые вопросы</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="tech-card p-6 bg-gradient-to-br from-tech-purple/20 to-tech-orange/10">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Гарантированный ROI</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-green-500"><Check size={20} /></span>
                <span className="text-foreground">Средний ROI проектов автоматизации составляет <span className="font-semibold text-tech-purple">250-300%</span> в первый год</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-green-500"><Check size={20} /></span>
                <span className="text-foreground">Окупаемость большинства проектов происходит в течение <span className="font-semibold text-tech-purple">3-6 месяцев</span></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-green-500"><Check size={20} /></span>
                <span className="text-foreground">Вы получаете четкие метрики эффективности и <span className="font-semibold text-tech-purple">прозрачную отчетность</span></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 text-green-500"><Check size={20} /></span>
                <span className="text-foreground">Мы предоставляем <span className="font-semibold text-tech-purple">финансовые гарантии</span> на достижение заявленных результатов</span>
              </li>
            </ul>
            <Button className="w-full btn-primary" onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}>
              Рассчитать ROI для вашего проекта
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
