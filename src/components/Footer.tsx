
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark-bg text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-bold text-2xl gradient-text">Digital Process</Link>
            <p className="mt-4 text-gray-300">
              Профессиональная автоматизация бизнес-процессов и GTM инженерия
            </p>
            <div className="mt-4 flex flex-col space-y-2">
              <a 
                href="https://t.me/gleb_IT_bussines" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-tech-purple transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.73 2.27a1 1 0 0 0-1.19-.4L2.5 7.92a1 1 0 0 0 .19 1.91l7.36 2.37 2.37 7.36a1 1 0 0 0 1.91.19l6.06-18.05a1 1 0 0 0-.4-1.19z"></path>
                  <path d="M8.33 12.4 15 8.67"></path>
                </svg>
                Мой Telegram канал
              </a>
              <a 
                href="https://t.me/Asya_CryF1shHelper_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-tech-purple transition-colors inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.73 2.27a1 1 0 0 0-1.19-.4L2.5 7.92a1 1 0 0 0 .19 1.91l7.36 2.37 2.37 7.36a1 1 0 0 0 1.91.19l6.06-18.05a1 1 0 0 0-.4-1.19z"></path>
                  <path d="M8.33 12.4 15 8.67"></path>
                </svg>
                Чат-бот для записи на услуги
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-tech-purple transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-tech-purple transition-colors">Обо мне</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-tech-purple transition-colors">Услуги</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-tech-purple transition-colors">Портфолио</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-tech-purple transition-colors">Блог</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-tech-purple transition-colors">Автоматизация процессов</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-tech-purple transition-colors">API-интеграции</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-tech-purple transition-colors">Внедрение CRM/ERP</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-tech-purple transition-colors">AI-ассистенты</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-tech-purple transition-colors">GTM инженерия</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Digital Process. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-tech-purple transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-tech-purple transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
