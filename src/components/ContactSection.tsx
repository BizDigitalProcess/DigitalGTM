
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-tech-light-gray/20 dark:bg-tech-dark-bg/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Свяжитесь</span> со мной
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Готовы начать оптимизацию вашего бизнеса? Выберите удобный способ связи
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="tech-card p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
            <div className="bg-tech-purple/10 rounded-full p-4 mb-4">
              <MessageSquare className="w-8 h-8 text-tech-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Ассистент</h3>
            <p className="text-foreground/70 mb-4">
              Мгновенный ответ на базовые вопросы через AI-бота и запись на консультацию
            </p>
            <Button variant="outline" className="mt-auto border-tech-purple text-tech-purple hover:bg-tech-purple/10" asChild>
              <a href="https://t.me/Asya_CryF1shHelper_bot" target="_blank" rel="noopener noreferrer">
                Открыть чат
              </a>
            </Button>
          </div>
          
          <div className="tech-card p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
            <div className="bg-tech-purple/10 rounded-full p-4 mb-4">
              <Send className="w-8 h-8 text-tech-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telegram канал</h3>
            <p className="text-foreground/70 mb-4">
              Полезные материалы по автоматизации и кейсы проектов
            </p>
            <Button variant="outline" className="mt-auto border-tech-purple text-tech-purple hover:bg-tech-purple/10" asChild>
              <a href="https://t.me/DigitalGTM" target="_blank" rel="noopener noreferrer">
                Подписаться
              </a>
            </Button>
          </div>
          
          <div className="tech-card p-6 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300">
            <div className="bg-tech-purple/10 rounded-full p-4 mb-4">
              <Mail className="w-8 h-8 text-tech-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-foreground/70 mb-4">
              Для официальных запросов и коммерческих предложений
            </p>
            <Button variant="outline" className="mt-auto border-tech-purple text-tech-purple hover:bg-tech-purple/10" asChild>
              <a href="mailto:glebbogomolov04@gmail.com">
                Написать письмо
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
