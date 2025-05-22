
import { useState } from "react";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

// Import the first 3 cases from the portfolio data
import { portfolioCases } from '@/data/portfolio-data';

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCase, setSelectedCase] = useState<typeof portfolioCases[0] | null>(null);
  
  // Use the first 3 cases for the homepage
  const featuredCases = [
    portfolioCases.find(item => item.title.includes("Интеллектуальная автоматизация закупок")),
    portfolioCases.find(item => item.title.includes("AI агент для онбординга")),
    portfolioCases.find(item => item.title.includes("Автоматизация контент-маркетинга"))
  ].filter(Boolean);
  
  const homepageCases = featuredCases.length === 3 ? featuredCases : portfolioCases.slice(0, 3);
  
  const openCaseDetails = (caseItem: typeof portfolioCases[0]) => {
    setSelectedCase(caseItem);
  };
  
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-tech-purple to-tech-orange bg-clip-text text-transparent">
            Портфолио проектов
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Мы помогли десяткам компаний преодолеть операционные трудности и достичь впечатляющих бизнес-результатов. Ваш бизнес может быть следующим!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {homepageCases.map((caseItem, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden tech-card transition-all duration-300 cursor-pointer ${activeIndex === index ? 'ring-2 ring-tech-purple' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{caseItem.title}</h3>
                {caseItem.niche && (
                  <Badge className="mb-3 bg-tech-orange text-white">
                    {caseItem.niche}
                  </Badge>
                )}
                <p className="text-foreground/70 text-sm mb-4">{caseItem.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseItem.tags && caseItem.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-tech-purple text-tech-purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  {caseItem.metrics && caseItem.metrics.map((metric, i) => (
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
          <Button variant="default" className="bg-tech-purple hover:bg-tech-purple/90 flex items-center gap-2 group" asChild>
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
                {selectedCase.niche && (
                  <>
                    <h4 className="text-lg font-medium mb-3">Ниша клиента</h4>
                    <p className="mb-4">{selectedCase.niche}</p>
                  </>
                )}
                
                {selectedCase.systemDescription && (
                  <>
                    <h4 className="text-lg font-medium mb-3">Описание системы</h4>
                    <p className="mb-4">{selectedCase.systemDescription}</p>
                    
                    {selectedCase.keyModules && (
                      <>
                        <h5 className="text-md font-medium mb-2">Ключевые модули:</h5>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                          {selectedCase.keyModules.map((module, i) => (
                            <li key={i}>{module}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </>
                )}
                
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
    </section>
  );
};

export default PortfolioSection;
