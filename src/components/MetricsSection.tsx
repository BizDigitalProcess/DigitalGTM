
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Измеримые результаты</span> автоматизации
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Внедряем в ваш бизнес системы, которые экономят до 80% времени на рутинных задачах и увеличивают чистую прибыль на 30-45% уже в первые месяцы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <MetricCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-tech-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
            title="Экономия времени"
            value="80%"
            description="Сокращение времени на выполнение рутинных операций за счет их автоматизации"
          />
          <MetricCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-tech-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
            title="Снижение затрат"
            value="60%"
            description="Уменьшение операционных расходов на обработку данных и управление бизнес-процессами"
          />
          <MetricCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-tech-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
            title="Рост производительности"
            value="3-5x"
            description="Увеличение скорости выполнения стандартных задач и общей эффективности работы"
          />
          <MetricCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-tech-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
            title="Точность данных"
            value="99.9%"
            description="Исключение человеческого фактора и повышение точности во всех операциях"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
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
            <h3 className="text-2xl font-bold mb-6">Гарантированный ROI</h3>
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
