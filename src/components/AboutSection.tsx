
import { CheckCircle, Download, Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const skills = [
  "N8N, .NET, Python, 1C",
  "API интеграции (REST, GraphQL)",
  "Автоматизация GTM и систем аналитики",
  "Разработка чат-ботов и AI ассистентов",
  "Интеграция CRM/ERP систем",
  "Оптимизация бизнес-процессов"
];

const experiences = [
  {
    title: "Специалист по автоматизации бизнес процессов",
    company: "AIVIBE",
    period: "Апрель 2025 - настоящее время",
    description: "Создание AI-агентов и автоматизация бизнес процессов, разработка сложных программных продуктов."
  },
  {
    title: "IT Business Automation | .NET Backend Developer | SaaS & API Integrations",
    company: "Freelance",
    period: "Февраль 2025 - настоящее время",
    description: "Создание умных IT-решений для масштабирования бизнеса и автоматизации процессов."
  },
  {
    title: "IT Business Developer",
    company: "CopySpace",
    period: "Декабрь 2024 - Март 2025",
    description: "Развитие IT-отдела, форматирование отдела продаж, автоматизация процессов, оптимизация продаж и интеграция CRM."
  },
  {
    title: ".NET Developer",
    company: "FoxLab",
    period: "Июнь 2024 - Март 2025",
    description: "Разработка масштабируемых решений для B2B и B2C клиентов."
  },
  {
    title: "Junior .NET Developer",
    company: "",
    period: "Ноябрь 2023 - Июнь 2024",
    description: "Работа над проектами с использованием .NET, ASP.NET MVC и PostgreSQL."
  }
];

const education = [
  {
    degree: "Специалист информационных систем",
    institution: "ВПМТ",
    period: "Сентябрь 2020 - Июнь 2024",
    details: "с отличием"
  }
];

const AboutSection = () => {
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/3 relative">
            <div className="rounded-full overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/03a35695-ef86-4301-b561-62513f166123.png" 
                alt="GTM и автоматизация специалист" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-tech-purple text-white py-3 px-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl">8+ лет опыта</p>
            </div>
          </div>
          
          {/* Right side - Content with fully gradient heading */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Обо мне</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6">
              Я специалист по автоматизации бизнес-процессов и GTM-инженерии с более чем 8-летним опытом работы. Помогаю бизнесам всех размеров трансформировать их операционную эффективность через внедрение современных технологических решений.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8">
              Моя цель — создавать системы, которые не просто автоматизируют рутину, но и обеспечивают измеримый результат для бизнеса: сокращение затрат, повышение эффективности и масштабирование без роста операционных издержек.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Ключевые навыки:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-tech-purple" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="btn-primary flex items-center gap-2" onClick={handleDownloadResume}>
              <Download size={16} />
              Скачать резюме
            </Button>
          </div>
        </div>
        
        {/* Experience Section with black heading */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Профессиональный опыт
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className="tech-card p-8">
              <Collapsible 
                open={isExperienceOpen} 
                onOpenChange={setIsExperienceOpen}
                className="w-full"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-tech-purple/10 p-3 rounded-full mr-4">
                    <Briefcase className="text-tech-purple" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold flex-grow">Опыт работы</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      {isExperienceOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                      <span className="sr-only">Показать/скрыть</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-tech-purple pl-4 relative">
                      <div className="absolute w-3 h-3 bg-tech-purple rounded-full -left-[7px] top-1.5"></div>
                      <h4 className="font-bold text-lg">{exp.title}</h4>
                      {exp.company && <p className="text-tech-purple font-medium">{exp.company}</p>}
                      <p className="text-sm text-foreground/60 mb-2">{exp.period}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                  
                  <div className="border-l-2 border-tech-purple pl-4 relative">
                    <div className="absolute w-3 h-3 bg-tech-purple rounded-full -left-[7px] top-1.5"></div>
                    <p className="text-sm font-medium">+ 2 стажировки</p>
                    <p className="text-sm text-foreground/70">Maxim technology & Гос. Оборон. Промышленное предприятие</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            
            {/* Education */}
            <div className="tech-card p-8">
              <Collapsible 
                open={isEducationOpen} 
                onOpenChange={setIsEducationOpen}
                className="w-full"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-tech-purple/10 p-3 rounded-full mr-4">
                    <GraduationCap className="text-tech-purple" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold flex-grow">Образование</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      {isEducationOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                      <span className="sr-only">Показать/скрыть</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                
                <CollapsibleContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-tech-orange pl-4 relative">
                      <div className="absolute w-3 h-3 bg-tech-orange rounded-full -left-[7px] top-1.5"></div>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-tech-orange font-medium">{edu.institution}</p>
                      <p className="text-sm text-foreground/60 mb-2">{edu.period}</p>
                      <p>{edu.details}</p>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
