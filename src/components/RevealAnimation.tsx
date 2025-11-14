import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export const RevealAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 3,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors: ["#5EEAD4", "#A78BFA", "#F472B6", "#60A5FA"],
      });
    }, 50);

    // Fade out animation and complete
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-800 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        {/* Multiple burst effects */}
        <div className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="absolute inset-0 rounded-full bg-neon-cyan/40 animate-burst" />
          <div className="absolute inset-0 rounded-full bg-neon-purple/40 animate-burst" style={{ animationDelay: "0.2s" }} />
          <div className="absolute inset-0 rounded-full bg-neon-pink/40 animate-burst" style={{ animationDelay: "0.4s" }} />
        </div>

        <div className="relative z-10 text-center space-y-6 animate-scale-in">
          <div className="text-8xl animate-glow-pulse">✨</div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
            Happy Children's Day!
          </h2>
        </div>
      </div>
    </div>
  );
};
