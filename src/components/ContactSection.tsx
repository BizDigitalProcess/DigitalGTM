
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.",
      });
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-tech-light-gray/30 dark:from-tech-dark-bg dark:to-background" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Свяжитесь</span> со мной
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Готовы увеличить эффективность вашего бизнеса через автоматизацию и правильную аналитику? Свяжитесь со мной любым удобным способом.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Telegram Bot */}
          <Card className="tech-card flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 p-3 bg-tech-purple/10 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-tech-purple"
                >
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Telegram Bot
              </h3>
              <p className="text-foreground/70 mb-6 flex-grow">
                Запишитесь на бесплатную консультацию через моего умного Telegram-бота, который поможет определить ваши потребности и подобрать оптимальное решение.
              </p>
              <Button 
                className="btn-primary w-full"
                onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}
              >
                Начать чат с ботом
              </Button>
            </CardContent>
          </Card>
          
          {/* Telegram Channel */}
          <Card className="tech-card flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 p-3 bg-tech-purple/10 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-tech-purple"
                >
                  <path d="M22 8a7 7 0 0 0-7-7H9a7 7 0 0 0-7 7v8a7 7 0 0 0 7 7h7a7 7 0 0 0 7-7Z"></path>
                  <path d="M19 12a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3Z"></path>
                  <path d="M15 6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Telegram Канал
              </h3>
              <p className="text-foreground/70 mb-6 flex-grow">
                Подпишитесь на мой Telegram канал, где я регулярно публикую интересные новости, полезные советы и кейсы по автоматизации и оптимизации бизнес-процессов.
              </p>
              <Button 
                className="btn-primary w-full"
                onClick={() => window.open('https://t.me/DigitalGTM', '_blank')}
              >
                Подписаться на канал
              </Button>
            </CardContent>
          </Card>
          
          {/* Email */}
          <Card className="tech-card flex flex-col h-full hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 p-3 bg-tech-purple/10 rounded-lg inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-tech-purple"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>
              <p className="text-foreground/70 mb-6 flex-grow">
                Для официальных запросов и коммерческих предложений вы можете связаться со мной по электронной почте.
              </p>
              <div className="text-tech-purple font-medium text-center p-3 border border-tech-purple/20 rounded-md bg-tech-purple/5">
                glebbogomolov04@gmail.com
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
