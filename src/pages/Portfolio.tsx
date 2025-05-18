
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, X, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// Import the portfolio cases
import { portfolioCases } from '@/data/portfolio-data';

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredCases, setFilteredCases] = useState(portfolioCases);
  
  // Extract unique categories/tags from all cases
  const allTags = Array.from(
    new Set(portfolioCases.flatMap(caseItem => caseItem.tags || []))
  ).sort();

  // Group tags into categories for better organization
  const categories = {
    'all': 'Все проекты',
    'ai': 'AI и Автоматизация',
    'integration': 'Интеграции',
    'security': 'Безопасность',
    'analytics': 'Аналитика и Данные',
    'dev': 'Разработка'
  };
  
  const categoryTags = {
    'ai': ['AI', 'Автоматизация', 'RAG', 'NLP', 'Чат-бот', 'ML'],
    'integration': ['API', 'Интеграция', 'ERP-интеграция', '1С', 'Документооборот'],
    'security': ['Безопасность', 'Контроль доступа', 'Защита информации', 'Мониторинг'],
    'analytics': ['Аналитика', 'GTM', 'SEO', 'ML-аналитика', 'Анализ сантимента'],
    'dev': ['Разработка', 'Мобильная разработка', 'Карпулинг', 'Геолокация', 'Kotlin', 'OAuth2']
  };

  // Filter cases based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredCases(portfolioCases);
    } else {
      // Filter based on tags that belong to the selected category
      const relevantTags = categoryTags[filter] || [];
      setFilteredCases(
        portfolioCases.filter(caseItem => 
          caseItem.tags && caseItem.tags.some(tag => relevantTags.includes(tag))
        )
      );
    }
  }, [filter]);

  const openCaseDetails = (caseItem) => {
    setSelectedCase(caseItem);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-8">
                <span className="gradient-text">Портфолио</span> проектов
              </h2>
              <p className="text-lg text-foreground/80">
                Реальные примеры автоматизации и оптимизации бизнес-процессов с измеримыми финансовыми результатами
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.entries(categories).map(([key, label]) => (
                <Badge 
                  key={key}
                  variant={filter === key ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1 text-sm ${filter === key ? 'bg-tech-purple hover:bg-tech-purple/90' : 'border-tech-purple/50 text-tech-purple hover:bg-tech-purple/10'}`}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredCases.map((caseItem, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden tech-card transition-all duration-300 cursor-pointer hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <img 
                      src={caseItem.image || "/placeholder.svg"} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-tech-orange text-white">{caseItem.client}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{caseItem.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{caseItem.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.tags && caseItem.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-tech-purple text-tech-purple">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {caseItem.metrics && (
                      <div className="grid grid-cols-3 gap-2 text-center mb-4">
                        {caseItem.metrics.map((metric, i) => (
                          <div key={i}>
                            <p className="text-tech-purple font-bold">{metric.value}</p>
                            <p className="text-xs text-foreground/60">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
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

            <div className="text-center mt-12">
              <p className="text-lg text-foreground/80 mb-8">
                Это только часть проектов. Свяжитесь со мной, чтобы обсудить, как я могу помочь вашему бизнесу достигнуть конкретных финансовых результатов.
              </p>
              <Button className="btn-primary flex items-center gap-2 group" onClick={() => window.open('https://t.me/CryF1sh', '_blank')}>
                Обсудить ваш проект
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Case details dialog */}
        <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedCase && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center justify-between">
                    <span>{selectedCase.title}</span>
                    <DialogClose className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted">
                      <X size={18} />
                    </DialogClose>
                  </DialogTitle>
                  <Badge className="w-fit bg-tech-orange text-white mb-2">
                    {selectedCase.client}
                  </Badge>
                  <DialogDescription className="text-base text-foreground">
                    {selectedCase.fullDescription || selectedCase.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  {selectedCase.process && (
                    <>
                      <h4 className="text-lg font-medium mb-3">Этапы проекта</h4>
                      <ul className="space-y-2 mb-6">
                        {selectedCase.process.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-6 h-6 rounded-full bg-tech-purple text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {selectedCase.businessValue && (
                    <>
                      <h4 className="text-lg font-medium mb-3">Бизнес-ценность</h4>
                      <p className="mb-4">{selectedCase.businessValue}</p>
                    </>
                  )}
                  
                  {selectedCase.metrics && (
                    <>
                      <h4 className="text-lg font-medium mb-3">Результаты</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {selectedCase.metrics.map((metric, i) => (
                          <div key={i} className="p-4 bg-tech-purple/10 rounded-lg text-center">
                            <p className="text-tech-purple text-2xl font-bold">{metric.value}</p>
                            <p className="text-sm text-foreground/80">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {selectedCase.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedCase.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-tech-purple text-tech-purple">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
