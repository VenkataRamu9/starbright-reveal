import { useEffect, useState } from "react";

export const LoadingState = ({ onComplete }: { onComplete: () => void }) => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 500);

    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-xl animate-glow-pulse" />
        </div>
        <p className="text-2xl font-light text-foreground/80 tracking-wider">
          Preparing a special moment{dots}
        </p>
      </div>
    </div>
  );
};
