
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {/* AI Assistant */}
      <div className="bg-white dark:bg-tech-dark-bg/60 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-tech-purple/10 p-4 mb-4">
          <MessageSquare className="w-8 h-8 text-tech-purple" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">AI Ассистент</h3>
        <p className="text-foreground/70 mb-4 grow">
          Мгновенный ответ на базовые вопросы через AI-бота и запись на консультацию
        </p>
        
        <Button 
          variant="outline"
          className="border-tech-purple text-tech-purple hover:bg-tech-purple/10 w-full"
          onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}
        >
          Открыть чат
        </Button>
      </div>
      
      {/* Telegram Channel */}
      <div className="bg-white dark:bg-tech-dark-bg/60 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-tech-purple/10 p-4 mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            className="w-8 h-8 text-tech-purple"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Telegram канал</h3>
        <p className="text-foreground/70 mb-4 grow">
          Полезные материалы по автоматизации и кейсы проектов
        </p>
        
        <Button 
          variant="outline"
          className="border-tech-purple text-tech-purple hover:bg-tech-purple/10 w-full"
          onClick={() => window.open('https://t.me/DigitalGTM', '_blank')}
        >
          Подписаться
        </Button>
      </div>
      
      {/* Email */}
      <div className="bg-white dark:bg-tech-dark-bg/60 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
        <div className="rounded-full bg-tech-purple/10 p-4 mb-4">
          <Mail className="w-8 h-8 text-tech-purple" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Email</h3>
        <p className="text-foreground/70 mb-4 grow">
          Для официальных запросов и коммерческих предложений
        </p>
        
        <Button 
          variant="outline"
          className="border-tech-purple text-tech-purple hover:bg-tech-purple/10 w-full"
          onClick={() => {window.location.href = 'mailto:glebbogomolov04@gmail.com'}}
        >
          Написать письмо
        </Button>
      </div>
      
      <div className="md:col-span-3 mt-16 text-center">
        <Button 
          className="btn-primary text-lg py-6 px-8 flex items-center gap-2 group" 
          onClick={() => window.open('https://t.me/CryF1sh', '_blank')}
        >
          Связаться напрямую
          <ArrowRight 
            size={18} 
            className="transition-transform group-hover:translate-x-1" 
          />
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
