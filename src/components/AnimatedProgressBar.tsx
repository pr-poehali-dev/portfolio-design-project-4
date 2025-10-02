import { useEffect, useRef, useState } from 'react';

interface AnimatedProgressBarProps {
  name: string;
  level: number;
  delay?: number;
}

const AnimatedProgressBar = ({ name, level, delay = 0 }: AnimatedProgressBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              setWidth(level);
            }, delay);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [level, delay, isVisible]);

  return (
    <div ref={ref} className="animate-fade-in">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
