
import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем попап через небольшую задержку после загрузки
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpenDashboard = () => {
    window.open('https://digitalgtm.online/', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all dark:bg-tech-dark-bg">
        {/* Закрыть */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Иконка с анимацией */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-tech-purple to-tech-orange animate-pulse">
            <ExternalLink size={24} className="text-white" />
          </div>
        </div>

        {/* Заголовок */}
        <h3 className="mb-3 text-center text-xl font-bold gradient-text">
          Добро пожаловать!
        </h3>

        {/* Описание */}
        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
          Отслеживайте эффективность за своими инструментами с помощью онлайн доски и личного кабинета!
        </p>

        {/* Кнопки */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={handleOpenDashboard}
            className="btn-primary flex-1"
          >
            <ExternalLink size={16} className="mr-2" />
            Мой кабинет
          </Button>
          <Button
            onClick={handleClose}
            variant="outline"
            className="flex-1"
          >
            Позже
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
