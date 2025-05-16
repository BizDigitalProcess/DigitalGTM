import { useState, useEffect } from "react";

interface MetricProps {
  label: string;
  before: string | number;
  after: string | number;
  unit?: string;
  delay?: number;
}

const Metric = ({ label, before, after, unit = "", delay = 0 }: MetricProps) => {
  const [animated, setAnimated] = useState(false);
  const [current, setCurrent] = useState(typeof before === 'number' ? 0 : before);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  useEffect(() => {
    if (!animated || typeof after !== 'number' || typeof before !== 'number') return;
    
    const duration = 1500;
    const start = Date.now();
    const diff = after - before;
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      
      setCurrent(Math.floor(before + diff * progress));
      
      if (progress === 1) {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [animated, after, before]);
  
  return (
    <div className="flex flex-col items-center">
      <p className="text-foreground/70 mb-2 text-center">{label}</p>
      <div className="flex items-center gap-8 mb-2">
        <div className="flex flex-col items-center">
          <span className="text-foreground/50 text-sm">До</span>
          <span className="text-foreground/50 text-2xl">{before}{unit}</span>
        </div>
        <div className="border-t-2 border-tech-purple w-16"></div>
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium">После</span>
          <span className={`text-tech-purple text-3xl font-bold ${animated ? "animate-pulse-light" : ""}`}>
            {current}{unit}
          </span>
        </div>
      </div>
    </div>
  );
};

const MetricsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Измеримые результаты</span> автоматизации
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Конкретные улучшения, которых достигают мои клиенты после внедрения автоматизации
          </p>
        </div>
        
        <div className="tech-card p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Metric 
              label="Экономия времени на процесс" 
              before={120} 
              after={15} 
              unit=" мин" 
              delay={200}
            />
            <Metric 
              label="Ошибки в обработке данных" 
              before={12} 
              after={0.5} 
              unit="%" 
              delay={400}
            />
            <Metric 
              label="Количество обрабатываемых запросов" 
              before={50} 
              after={250} 
              unit="/час" 
              delay={600}
            />
            <Metric 
              label="Срок окупаемости" 
              before="3 мес" 
              after="2 нед" 
              delay={800}
            />
            <Metric 
              label="Удовлетворенность клиентов" 
              before={65} 
              after={95} 
              unit="%" 
              delay={1000}
            />
            <Metric 
              label="ROI инвестиций в автоматизацию" 
              before={100} 
              after={350} 
              unit="%" 
              delay={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
