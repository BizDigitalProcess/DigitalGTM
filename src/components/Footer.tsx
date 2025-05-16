
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
