
import { ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  // Telegram URLs - you will need to replace these with your actual Telegram channel and bot URLs
  const telegramChannelUrl = "https://t.me/your_channel";
  const telegramBotUrl = "https://t.me/your_chatbot_username";
  
  const handleTelegramChannelClick = () => {
    window.open(telegramChannelUrl, '_blank');
  };
  
  const handleTelegramBotClick = () => {
    window.open(telegramBotUrl, '_blank');
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-tech-light-gray/30 to-white dark:from-tech-dark-bg/50 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Свяжитесь</span> со мной
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Готов обсудить задачи вашего бизнеса и предложить оптимальные решения по автоматизации
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="tech-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">Telegram Канал</h3>
                  <p className="text-foreground/70 mb-6">
                    Подпишитесь на мой канал, чтобы получать полезные материалы по автоматизации бизнес-процессов
                  </p>
                  <Button 
                    className="btn-primary flex items-center gap-2 w-full md:w-auto"
                    onClick={handleTelegramChannelClick}
                  >
                    Подписаться на канал
                    <ExternalLink size={18} />
                  </Button>
                </div>
                <div className="bg-tech-purple/10 p-6 md:p-8 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-tech-purple/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MessageCircle className="w-8 h-8 text-tech-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">AI Ассистент</h3>
                  <p className="text-foreground/70 text-center mb-6">
                    Чат-бот поможет выбрать оптимальное решение и запишет вас на консультацию
                  </p>
                  <Button 
                    className="btn-secondary flex items-center gap-2"
                    onClick={handleTelegramBotClick}
                  >
                    Написать в Telegram
                    <ExternalLink size={18} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <p className="text-foreground/60 text-sm">
              Консультации проводятся после предварительной записи через Telegram-бота. <br />
              Вы получите детальную информацию о возможностях автоматизации именно ваших процессов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
