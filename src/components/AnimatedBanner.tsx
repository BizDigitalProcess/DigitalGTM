
import { useEffect, useRef } from 'react';

const AnimatedBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const timeline = [
      {
        time: 0,
        show: 'stage1',
        hide: ['stage2', 'stage3']
      },
      {
        time: 1000,
        show: 'stage2',
        hide: ['stage1', 'stage3']
      },
      {
        time: 3000,
        show: 'stage3',
        hide: ['stage1', 'stage2']
      }
    ];

    let currentIndex = 0;
    
    // Initial state
    const stage1 = banner.querySelector('.stage-1');
    const stage2 = banner.querySelector('.stage-2');
    const stage3 = banner.querySelector('.stage-3');
    
    if (stage1) stage1.classList.add('active');
    if (stage2) stage2.classList.remove('active');
    if (stage3) stage3.classList.remove('active');
    
    // Animation loop
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % timeline.length;
      const current = timeline[currentIndex];
      
      // Hide elements
      current.hide.forEach(id => {
        const element = banner.querySelector(`.${id}`);
        if (element) element.classList.remove('active');
      });
      
      // Show element
      const showElement = banner.querySelector(`.${current.show}`);
      if (showElement) showElement.classList.add('active');
      
      // Special effects
      if (current.show === 'stage1') {
        const percentage = showElement?.querySelector('.percentage');
        if (percentage) {
          percentage.classList.add('tremor');
          setTimeout(() => {
            percentage?.classList.remove('tremor');
          }, 800);
        }
      }
    }, 4000); // Full cycle is 5 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div 
      ref={bannerRef}
      className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-2xl"
    >
      {/* Background with grid and gradients */}
      <div className="absolute inset-0 bg-[#9b87f5] bg-opacity-20 grid grid-cols-6 grid-rows-6 z-0 overflow-hidden">
        {/* Visual grid for tech effect */}
        {[...Array(36)].map((_, i) => (
          <div 
            key={i} 
            className="border border-[#9b87f5]/10 flex items-center justify-center"
          >
            {i % 7 === 0 && <div className="w-2 h-2 rounded-full bg-[#9b87f5]/30 animate-pulse"></div>}
          </div>
        ))}
        
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-[#9b87f5]/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F97316]/20 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        {/* Stage 1: Problem */}
        <div className="stage-1 absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-700 opacity-0">
          <div className="relative mb-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">
              Ваш бизнес теряет <span className="percentage text-[#F97316]">40%</span> прибыли из-за рутины?
            </h2>
            <div className="absolute -z-10 w-full h-full opacity-40 top-0 left-0">
              <svg width="100%" height="100%" viewBox="0 0 100 60" className="opacity-30">
                <g className="process-diagram">
                  <path d="M10,20 L30,20 L30,10 L50,10 L50,30 L70,30 L70,40 L90,40" stroke="#ff4444" strokeWidth="2" fill="none" className="animate-drawPath" />
                  <circle cx="10" cy="20" r="3" fill="#ff4444" className="animate-pulse" />
                  <circle cx="30" cy="20" r="3" fill="#ff4444" className="animate-pulse delay-100" />
                  <circle cx="30" cy="10" r="3" fill="#ff4444" className="animate-pulse delay-200" />
                  <circle cx="50" cy="10" r="3" fill="#ff4444" className="animate-pulse delay-300" />
                  <circle cx="50" cy="30" r="3" fill="#ff4444" className="animate-pulse delay-400" />
                  <circle cx="70" cy="30" r="3" fill="#ff4444" className="animate-pulse delay-500" />
                  <circle cx="70" cy="40" r="3" fill="#ff4444" className="animate-pulse delay-600" />
                  <circle cx="90" cy="40" r="3" fill="#ff4444" className="animate-pulse delay-700" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <div className="h-3 w-3 bg-[#F97316] rounded-full animate-pulse"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Stage 2: Solution */}
        <div className="stage-2 absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-700 opacity-0">
          <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-lg mb-4">
            Автоматизируем процессы за 14 дней с гарантией ROI <span className="text-[#F97316]">200%</span>!
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Python
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              .NET
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              n8n
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              API
            </div>
          </div>
          
          <div className="absolute -z-10 w-full h-full opacity-30">
            <div className="gear-animation absolute top-1/4 left-1/4 w-16 h-16">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,5 C15.866,5 19,8.13401 19,12 C19,15.866 15.866,19 12,19 C8.13401,19 5,15.866 5,12 C5,8.13401 8.13401,5 12,5 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z M8,2 L16,2 L16,4 L8,4 L8,2 Z M8,20 L16,20 L16,22 L8,22 L8,20 Z M20,8 L22,8 L22,16 L20,16 L20,8 Z M2,8 L4,8 L4,16 L2,16 L2,8 Z M19.0711,3.51472 L20.4853,4.92893 L19.0711,6.34315 L17.6569,4.92893 L19.0711,3.51472 Z M4.92893,3.51472 L6.34315,4.92893 L4.92893,6.34315 L3.51472,4.92893 L4.92893,3.51472 Z M19.0711,19.0711 L20.4853,17.6569 L19.0711,16.2426 L17.6569,17.6569 L19.0711,19.0711 Z M4.92893,19.0711 L6.34315,17.6569 L4.92893,16.2426 L3.51472,17.6569 L4.92893,19.0711 Z" className="text-white animate-spin-slow" />
              </svg>
            </div>
            <div className="gear-animation absolute bottom-1/4 right-1/4 w-12 h-12">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,5 C15.866,5 19,8.13401 19,12 C19,15.866 15.866,19 12,19 C8.13401,19 5,15.866 5,12 C5,8.13401 8.13401,5 12,5 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z M8,2 L16,2 L16,4 L8,4 L8,2 Z M8,20 L16,20 L16,22 L8,22 L8,20 Z M20,8 L22,8 L22,16 L20,16 L20,8 Z M2,8 L4,8 L4,16 L2,16 L2,8 Z M19.0711,3.51472 L20.4853,4.92893 L19.0711,6.34315 L17.6569,4.92893 L19.0711,3.51472 Z M4.92893,3.51472 L6.34315,4.92893 L4.92893,6.34315 L3.51472,4.92893 L4.92893,3.51472 Z M19.0711,19.0711 L20.4853,17.6569 L19.0711,16.2426 L17.6569,17.6569 L19.0711,19.0711 Z M4.92893,19.0711 L6.34315,17.6569 L4.92893,16.2426 L3.51472,17.6569 L4.92893,19.0711 Z" className="text-white animate-spin-slow-reverse" />
              </svg>
            </div>
            <svg width="100%" height="100%" viewBox="0 0 100 60" className="opacity-40">
              <g className="process-diagram">
                <path d="M10,20 L30,20 L30,10 L50,10 L50,30 L70,30 L70,40 L90,40" stroke="#22cc66" strokeWidth="2" fill="none" className="animate-drawPath" />
                <circle cx="10" cy="20" r="3" fill="#22cc66" className="animate-pulse" />
                <circle cx="30" cy="20" r="3" fill="#22cc66" className="animate-pulse delay-100" />
                <circle cx="30" cy="10" r="3" fill="#22cc66" className="animate-pulse delay-200" />
                <circle cx="50" cy="10" r="3" fill="#22cc66" className="animate-pulse delay-300" />
                <circle cx="50" cy="30" r="3" fill="#22cc66" className="animate-pulse delay-400" />
                <circle cx="70" cy="30" r="3" fill="#22cc66" className="animate-pulse delay-500" />
                <circle cx="70" cy="40" r="3" fill="#22cc66" className="animate-pulse delay-600" />
                <circle cx="90" cy="40" r="3" fill="#22cc66" className="animate-pulse delay-700" />
              </g>
            </svg>
          </div>
          
          <div className="flex items-center space-x-2 justify-center">
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-[#F97316] rounded-full animate-pulse"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Stage 3: CTA */}
        <div className="stage-3 absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-700 opacity-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-4">
            Бесплатная консультация GTM-инженера →
          </h2>
          
          <div className="relative flex items-center justify-center mb-4">
            <div className="absolute -right-4 -top-4 bg-[#F97316] text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
              <p className="font-semibold text-sm">Успей записаться на беслпатную консультацию</p>
            </div>
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white">
                <path fill="currentColor" d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M12,4 c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8S7.582,4,12,4z M14,15c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1h-4 c-0.552,0-1,0.448-1,1s0.448,1,1,1h2.59L8.295,14.295c-0.391,0.391-0.391,1.024,0,1.414C8.488,15.902,8.744,16,9,16 s0.512-0.098,0.705-0.291L14,11.414V14C14,14.552,14.448,15,15,15z" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 justify-center">
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-[#F97316] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
