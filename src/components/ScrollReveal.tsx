import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'bounce' | 'scale';
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  animation = 'slide-up', 
  delay = 0,
  className = '' 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = {
    'fade': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'bounce': 'animate-bounce-in',
    'scale': 'animate-scale-in'
  }[animation];

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{
        transition: 'opacity 0.1s ease'
      }}
    >
      <style>{`
        .revealed {
          opacity: 1 !important;
        }
        .revealed > * {
          animation: ${animationClass.replace('animate-', '')} 0.6s ease-out forwards;
        }
      `}</style>
      {children}
    </div>
  );
};

export default ScrollReveal;
