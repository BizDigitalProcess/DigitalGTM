
import React from 'react';
import { 
  Rocket, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  BarChart3,
  Users
} from "lucide-react";

const metrics = [
  {
    icon: <Rocket className="w-10 h-10 text-tech-purple" />,
    title: "3-7x",
    description: "рост производительности после внедрения автоматизации"
  },
  {
    icon: <Clock className="w-10 h-10 text-tech-purple" />,
    title: "80%",
    description: "экономия времени на рутинных операциях"
  },
  {
    icon: <ArrowUpRight className="w-10 h-10 text-tech-purple" />,
    title: "300%",
    description: "средний ROI проектов автоматизации"
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-tech-purple" />,
    title: "99%",
    description: "точность исполнения автоматизированных процессов"
  }
];

const additionalStats = [
  {
    label: "Срок окупаемости",
    before: "от 2 недель до 3 месяцев",
    after: ""
  },
  {
    label: "Запуск первой версии",
    before: "2-4 недели",
    after: "8-12 недель"
  },
  {
    label: "Снижение операционных затрат",
    before: "45-60%",
    after: "20-35%"
  }
];

const MetricsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-tech-dark-bg to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Измеримые результаты <span className="gradient-text">автоматизации</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Благодаря современным инструментам и методологиям, мои решения обеспечивают не просто оптимизацию процессов, но и конкретный финансовый результат
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="tech-card bg-white/5 backdrop-filter backdrop-blur-lg border border-white/10 p-6 rounded-lg text-center relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-tech-purple/30 to-tech-orange/30 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative">
                <div className="mb-4 flex justify-center">
                  <div className="bg-tech-purple/10 p-3 rounded-full">
                    {metric.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {metric.title}
                </h3>
                
                <p className="text-white/70">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Сравнение с традиционными подходами
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-4 border border-white/5"
              >
                <h4 className="text-lg font-medium text-white mb-3">{stat.label}</h4>
                
                {stat.after ? (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-tech-purple/20 to-tech-purple/10 p-3 rounded-md">
                        <p className="text-sm text-white/50 mb-1">С автоматизацией</p>
                        <p className="text-xl font-bold text-white">{stat.before}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-r from-gray-700/20 to-gray-700/10 p-3 rounded-md">
                        <p className="text-sm text-white/50 mb-1">Без автоматизации</p>
                        <p className="text-xl font-bold text-white">{stat.after}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-tech-purple/20 to-tech-purple/10 p-3 rounded-md">
                    <p className="text-xl font-bold text-white">{stat.before}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-white/70 text-center">
            <p>Результаты могут отличаться в зависимости от сложности процессов, масштаба бизнеса и уровня текущей автоматизации</p>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-tech-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tech-orange/5 rounded-full filter blur-3xl"></div>
      
      {/* Decorative graph lines */}
      <div className="absolute bottom-0 left-0 w-full h-20 opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path 
            d="M0,10 L5,12 L10,8 L15,14 L20,6 L25,12 L30,8 L35,16 L40,4 L45,12 L50,8 L55,14 L60,2 L65,10 L70,6 L75,14 L80,8 L85,16 L90,4 L95,12 L100,8" 
            stroke="#9b87f5" 
            strokeWidth="0.5"
            fill="none"
          />
          <path 
            d="M0,15 L5,13 L10,16 L15,11 L20,14 L25,9 L30,15 L35,10 L40,16 L45,8 L50,14 L55,9 L60,15 L65,7 L70,13 L75,8 L80,14 L85,6 L90,12 L95,8 L100,12" 
            stroke="#F97316" 
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default MetricsSection;
