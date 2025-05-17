
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Обо мне", path: "/about" },
    { name: "Услуги", path: "/services" },
    { name: "Портфолио", path: "/portfolio", disabled: true },
    { name: "Блог", path: "https://t.me/DigitalGTM", external: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-tech-dark-bg/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl">
              <span className="gradient-text">DigitalGTM</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a 
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-tech-purple transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`text-foreground/80 transition-colors duration-200 ${
                    item.disabled 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:text-tech-purple'
                  }`}
                  onClick={e => item.disabled && e.preventDefault()}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <Button 
              className="btn-primary"
              onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}
            >
              Получить консультацию
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              item.external ? (
                <a 
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-tech-purple transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`text-foreground/80 transition-colors duration-200 py-2 ${
                    item.disabled 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:text-tech-purple'
                  }`}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button 
              className="btn-primary w-full mt-4"
              onClick={() => {
                window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank');
                setIsOpen(false);
              }}
            >
              Получить консультацию
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
