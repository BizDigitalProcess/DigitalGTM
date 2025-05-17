
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Как автоматизация помогает малому бизнесу экономить до 40% ресурсов",
    excerpt: "Рассмотрим практические примеры внедрения автоматизации в малом бизнесе и достигнутые результаты...",
    image: "/placeholder.svg",
    date: "15 мая 2025",
    category: "Автоматизация"
  },
  {
    id: 2,
    title: "Искусственный интеллект в бизнес-процессах: мифы и реальность",
    excerpt: "Развенчиваем распространенные заблуждения об AI в бизнесе и рассказываем о реальных возможностях...",
    image: "/placeholder.svg",
    date: "10 мая 2025",
    category: "Искусственный интеллект"
  },
  {
    id: 3,
    title: "5 ключевых метрик для оценки эффективности автоматизации",
    excerpt: "Какие показатели помогут понять, действительно ли автоматизация приносит пользу вашему бизнесу...",
    image: "/placeholder.svg",
    date: "5 мая 2025",
    category: "Аналитика"
  },
  {
    id: 4,
    title: "Как выбрать оптимальную CRM систему для вашего бизнеса",
    excerpt: "Обзор популярных CRM-систем, их сильные и слабые стороны, особенности внедрения и использования...",
    image: "/placeholder.svg",
    date: "1 мая 2025",
    category: "CRM системы"
  },
  {
    id: 5,
    title: "Автоматизация маркетинга: от ручного управления к стратегии",
    excerpt: "Как перейти от точечных маркетинговых активностей к комплексной автоматизированной стратегии...",
    image: "/placeholder.svg",
    date: "25 апреля 2025",
    category: "Маркетинг"
  },
  {
    id: 6,
    title: "Чат-боты в клиентском сервисе: кейсы и рекомендации",
    excerpt: "Практические примеры использования чат-ботов для улучшения клиентского опыта и снижения нагрузки...",
    image: "/placeholder.svg",
    date: "20 апреля 2025",
    category: "Чат-боты"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Блог</span> о бизнес-автоматизации
              </h1>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Делюсь опытом, знаниями и практическими советами по автоматизации процессов, внедрению AI и оптимизации бизнеса
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="tech-card overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-tech-purple font-medium">{post.category}</span>
                      <span className="text-sm text-foreground/60">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-foreground/70 mb-4 flex-grow">{post.excerpt}</p>
                    <Button 
                      variant="ghost" 
                      className="text-tech-purple hover:text-tech-dark-purple hover:bg-tech-purple/10 p-0 justify-start flex items-center gap-1 group"
                    >
                      Читать статью
                      <ArrowRight 
                        size={16} 
                        className="transition-transform group-hover:translate-x-1" 
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="btn-primary">Показать больше статей</Button>
            </div>
            
            <div className="mt-24 max-w-2xl mx-auto bg-tech-purple/5 p-8 rounded-lg border border-tech-purple/20">
              <h2 className="text-2xl font-bold mb-4 text-center">Подпишитесь на рассылку</h2>
              <p className="text-center text-foreground/80 mb-6">
                Получайте новые статьи, кейсы и полезные материалы об автоматизации бизнес-процессов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-grow px-4 py-2 rounded-lg border border-tech-light-gray focus:border-tech-purple focus:ring-1 focus:ring-tech-purple outline-none"
                />
                <Button className="btn-primary whitespace-nowrap">Подписаться</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
