import { useState, useEffect } from 'react';

interface PageLoaderProps {
  onLoadComplete?: () => void;
}

const PageLoader = ({ onLoadComplete }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete?.();
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-50 animate-pulse"></div>
        
        <div className="relative flex flex-col items-center gap-6">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-transparent border-t-secondary rounded-full animate-spin" style={{ animationDuration: '1s', animationDirection: 'reverse' }}></div>
            <div className="absolute inset-4 border-4 border-transparent border-t-accent rounded-full animate-spin" style={{ animationDuration: '0.7s' }}></div>
          </div>
          
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;