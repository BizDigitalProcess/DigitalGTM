
import { useState } from "react";
import { Mail, Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Заявка отправлена",
        description: "Я свяжусь с вами в ближайшее время!",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4 lg:space-y-8">
            <Card className="tech-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-tech-purple/10 flex items-center justify-center rounded-full mb-4">
                  <Mail className="w-6 h-6 text-tech-purple" />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-foreground/70">hello@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="tech-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-tech-purple/10 flex items-center justify-center rounded-full mb-4">
                  <Phone className="w-6 h-6 text-tech-purple" />
                </div>
                <h3 className="font-medium mb-1">Телефон</h3>
                <p className="text-foreground/70">+7 (XXX) XXX-XX-XX</p>
              </CardContent>
            </Card>
            
            <Card className="tech-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-tech-purple/10 flex items-center justify-center rounded-full mb-4">
                  <MessageSquare className="w-6 h-6 text-tech-purple" />
                </div>
                <h3 className="font-medium mb-1">Мессенджеры</h3>
                <p className="text-foreground/70">Telegram, WhatsApp</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact form */}
          <Card className="tech-card col-span-1 lg:col-span-2">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Оставьте заявку на консультацию</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="ivan@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full"
                    placeholder="Опишите вашу задачу или вопрос"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  <Send size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
