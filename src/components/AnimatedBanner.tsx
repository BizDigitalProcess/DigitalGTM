
import { useEffect, useRef } from 'react';

const AnimatedBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const timeline = [
      {
        time: 0,
        show: 'stage-1',
        hide: ['stage-2', 'stage-3']
      },
      {
        time: 1000,
        show: 'stage-2',
        hide: ['stage-1', 'stage-3']
      },
      {
        time: 3000,
        show: 'stage-3',
        hide: ['stage-1', 'stage-2']
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
      if (current.show === 'stage-1') {
        const percentage = showElement?.querySelector('.percentage');
        if (percentage) {
          percentage.classList.add('tremor');
          setTimeout(() => {
            percentage?.classList.remove('tremor');
          }, 800);
        }
      }
    }, 5000); // Extended cycle time to 5 seconds per slide
    
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
        {/* Stage 1: Problem - with red gears and glitches */}
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

          {/* Red gears with glitches */}
          <div className="absolute top-10 left-10 gear-animation">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-red-500 animate-spin-slow opacity-60">
              <path fill="currentColor" d="M12,5 C15.866,5 19,8.13401 19,12 C19,15.866 15.866,19 12,19 C8.13401,19 5,15.866 5,12 C5,8.13401 8.13401,5 12,5 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z M8,2 L16,2 L16,4 L8,4 L8,2 Z M8,20 L16,20 L16,22 L8,22 L8,20 Z M20,8 L22,8 L22,16 L20,16 L20,8 Z M2,8 L4,8 L4,16 L2,16 L2,8 Z M19.0711,3.51472 L20.4853,4.92893 L19.0711,6.34315 L17.6569,4.92893 L19.0711,3.51472 Z M4.92893,3.51472 L6.34315,4.92893 L4.92893,6.34315 L3.51472,4.92893 L4.92893,3.51472 Z M19.0711,19.0711 L20.4853,17.6569 L19.0711,16.2426 L17.6569,17.6569 L19.0711,19.0711 Z M4.92893,19.0711 L6.34315,17.6569 L4.92893,16.2426 L3.51472,17.6569 L4.92893,19.0711 Z" />
            </svg>
          </div>

          <div className="absolute bottom-20 right-20 gear-animation">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-red-500 animate-spin-slow-reverse opacity-60">
              <path fill="currentColor" d="M12,5 C15.866,5 19,8.13401 19,12 C19,15.866 15.866,19 12,19 C8.13401,19 5,15.866 5,12 C5,8.13401 8.13401,5 12,5 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z M8,2 L16,2 L16,4 L8,4 L8,2 Z M8,20 L16,20 L16,22 L8,22 L8,20 Z M20,8 L22,8 L22,16 L20,16 L20,8 Z M2,8 L4,8 L4,16 L2,16 L2,8 Z M19.0711,3.51472 L20.4853,4.92893 L19.0711,6.34315 L17.6569,4.92893 L19.0711,3.51472 Z M4.92893,3.51472 L6.34315,4.92893 L4.92893,6.34315 L3.51472,4.92893 L4.92893,3.51472 Z M19.0711,19.0711 L20.4853,17.6569 L19.0711,16.2426 L17.6569,17.6569 L19.0711,19.0711 Z M4.92893,19.0711 L6.34315,17.6569 L4.92893,16.2426 L3.51472,17.6569 L4.92893,19.0711 Z" />
            </svg>
          </div>
          
          {/* Glitch effects */}
          <div className="glitch-effect absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="glitch-line"></div>
            <div className="glitch-line"></div>
            <div className="glitch-line"></div>
          </div>
          
          <div className="flex items-center space-x-2 justify-center mt-auto">
            <div className="h-3 w-3 bg-[#F97316] rounded-full animate-pulse"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Stage 2: Solution - with green gears and tech logos */}
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
              1C
            </div>
          </div>
          
          {/* Green gears */}
          <div className="absolute top-10 left-10 gear-animation">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-500 animate-spin-slow opacity-80">
              <path fill="currentColor" d="M12,5 C15.866,5 19,8.13401 19,12 C19,15.866 15.866,19 12,19 C8.13401,19 5,15.866 5,12 C5,8.13401 8.13401,5 12,5 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z M8,2 L16,2 L16,4 L8,4 L8,2 Z M8,20 L16,20 L16,22 L8,22 L8,20 Z M20,8 L22,8 L22,16 L20,16 L20,8 Z M2,8 L4,8 L4,16 L2,16 L2,8 Z M19.0711,3.51472 L20.4853,4.92893 L19.0711,6.34315 L17.6569,4.92893 L19.0711,3.51472 Z M4.92893,3.51472 L6.34315,4.92893 L4.92893,6.34315 L3.51472,4.92893 L4.92893,3.51472 Z M19.0711,19.0711 L20.4853,17.6569 L19.0711,16.2426 L17.6569,17.6569 L19.0711,19.0711 Z M4.92893,19.0711 L6.34315,17.6569 L4.92893,16.2426 L3.51472,17.6569 L4.92893,19.0711 Z" />
            </svg>
          </div>

          <div className="absolute bottom-20 right-20 gear-animation">
            <svg viewBox="0 0 24 24" className="w-16 h-16 text-green-500 animate-spin-slow-reverse opacity-80">
              <path fill="currentColor" d="M12,5 C15.866,5 19,8.13401 19,12 C19,15.866 15.866,19 12,19 C8.13401,19 5,15.866 5,12 C5,8.13401 8.13401,5 12,5 Z M12,8 C9.79086,8 8,9.79086 8,12 C8,14.2091 9.79086,16 12,16 C14.2091,16 16,14.2091 16,12 C16,9.79086 14.2091,8 12,8 Z M8,2 L16,2 L16,4 L8,4 L8,2 Z M8,20 L16,20 L16,22 L8,22 L8,20 Z M20,8 L22,8 L22,16 L20,16 L20,8 Z M2,8 L4,8 L4,16 L2,16 L2,8 Z M19.0711,3.51472 L20.4853,4.92893 L19.0711,6.34315 L17.6569,4.92893 L19.0711,3.51472 Z M4.92893,3.51472 L6.34315,4.92893 L4.92893,6.34315 L3.51472,4.92893 L4.92893,3.51472 Z M19.0711,19.0711 L20.4853,17.6569 L19.0711,16.2426 L17.6569,17.6569 L19.0711,19.0711 Z M4.92893,19.0711 L6.34315,17.6569 L4.92893,16.2426 L3.51472,17.6569 L4.92893,19.0711 Z" />
            </svg>
          </div>
          
          {/* Add tech logos as background */}
          <div className="absolute -z-10 w-full h-full opacity-30">
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
          
          <div className="flex items-center space-x-2 justify-center mt-auto">
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-[#F97316] rounded-full animate-pulse"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Stage 3: CTA - with happy businessman and form */}
        <div className="stage-3 absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-700 opacity-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-4">
            Бесплатная консультация GTM-инженера
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            {/* Happy businessman icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-green-400">
                  <path fill="currentColor" d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z M15.59,7l-3.59,3.59L9.41,7L8,8.41l3.59,3.59L8,15.59L9.41,17l3.59-3.59 L16.59,17L18,15.59l-3.59-3.59L18,8.41L15.59,7z" />
                </svg>
              </div>
              {/* Thumb up icon */}
              <div className="mt-2 flex justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
                  <path fill="currentColor" d="M2,20.5C2,21.33 2.67,22 3.5,22h9c0.83,0 1.5,-0.67 1.5,-1.5V13c0,-0.83 -0.67,-1.5 -1.5,-1.5h-3V8.37c0,-1.87 1.62,-3.37 3.5,-3.37v-2C10.12,3 8.63,4.66 8.16,6.85L7.5,10H3.5C2.67,10 2,10.67 2,11.5V20.5zM5.5,11c0.28,0 0.5,0.22 0.5,0.5S5.78,12 5.5,12S5,11.78 5,11.5S5.22,11 5.5,11zM5.5,14c0.28,0 0.5,0.22 0.5,0.5S5.78,15 5.5,15S5,14.78 5,14.5S5.22,14 5.5,14zM5.5,17c0.28,0 0.5,0.22 0.5,0.5S5.78,18 5.5,18S5,17.78 5,17.5S5.22,17 5.5,17zM15.5,11c0.28,0 0.5,0.22 0.5,0.5S15.78,12 15.5,12S15,11.78 15,11.5S15.22,11 15.5,11zM15.5,14c0.28,0 0.5,0.22 0.5,0.5S15.78,15 15.5,15S15,14.78 15,14.5S15.22,14 15.5,14zM15.5,17c0.28,0 0.5,0.22 0.5,0.5S15.78,18 15.5,18S15,17.78 15,17.5S15.22,17 15.5,17z" />
                </svg>
              </div>
            </div>
            
            {/* Consultation form */}
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 w-full max-w-xs">
              <p className="text-white text-sm font-medium mb-2">
                Бесплатная консультация от специалиста по автоматизации бизнес процессов
              </p>
              <div className="bg-green-500 text-white py-2 px-3 rounded-md text-center cursor-pointer hover:bg-green-600 transition-colors shadow-lg" onClick={() => window.open('https://t.me/Asya_CryF1shHelper_bot', '_blank')}>
                Получить консультацию
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 justify-center mt-auto">
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-white/50 rounded-full"></div>
            <div className="h-3 w-3 bg-[#F97316] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .stage-1, .stage-2, .stage-3 {
          opacity: 0;
          transition: opacity 0.7s ease-in-out;
        }
        
        .stage-1.active, .stage-2.active, .stage-3.active {
          opacity: 1;
        }
        
        .percentage.tremor {
          animation: tremble 0.8s ease-in-out;
        }
        
        @keyframes tremble {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }
          20%, 40%, 60%, 80% { transform: translateX(1px); }
        }
        
        @keyframes drawPath {
          to { stroke-dashoffset: 0; }
        }
        
        .animate-drawPath {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawPath 2s forwards;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin 8s linear infinite reverse;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .glitch-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: rgba(255, 70, 70, 0.7);
          opacity: 0;
        }
        
        .glitch-line:nth-child(1) {
          animation: glitch-animation 3s infinite;
          animation-delay: 0.5s;
        }
        
        .glitch-line:nth-child(2) {
          animation: glitch-animation 3s infinite;
          animation-delay: 1s;
        }
        
        .glitch-line:nth-child(3) {
          animation: glitch-animation 3s infinite;
          animation-delay: 1.5s;
        }
        
        @keyframes glitch-animation {
          0% {
            top: 10%;
            height: 3px;
            opacity: 0;
          }
          1% {
            top: 10%;
            height: 3px;
            opacity: 1;
          }
          10% {
            top: 50%;
            height: 5px;
            opacity: 1;
          }
          11% {
            top: 50%;
            height: 5px;
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
        `}
      </style>
    </div>
  );
};

export default AnimatedBanner;
