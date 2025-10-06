import { useEffect, useRef } from 'react';

interface TelegramPostProps {
  channel: string;
  postId: number;
}

export default function TelegramPost({ channel, postId }: TelegramPostProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-post', `${channel}/${postId}`);
    script.setAttribute('data-width', '100%');
    script.async = true;

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [channel, postId]);

  return <div ref={containerRef} className="telegram-post-widget" />;
}
