import { useEffect, useState } from "react";
import classPhoto from "@/assets/section3-class.jpg";
import { Heart } from "lucide-react";

export const MainContent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-neon-pink/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Message */}
        <section className="text-center space-y-8 mb-32 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Happy Children's Day
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-foreground/90 font-light">
              My Brilliant Section 3 Stars
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: "0.3s" }}>
            You are the spark that makes every day brighter.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Your curiosity, energy, and spirit truly inspire greatness.
          </p>
        </section>

        {/* Photo Section */}
        <section className="max-w-6xl mx-auto mb-32 animate-scale-in" style={{ animationDelay: "0.7s" }}>
          <div className="relative group">
            {/* Glowing frame effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-3xl opacity-75 group-hover:opacity-100 blur-2xl transition-opacity duration-500 animate-glow-pulse" />
            
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={classPhoto}
                alt="Section 3 Class"
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating caption */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-xl px-8 py-4 rounded-full border border-primary/30 shadow-xl">
              <p className="text-lg font-semibold text-primary whitespace-nowrap">
                Section 3 - The Brightest Stars ✨
              </p>
            </div>
          </div>
        </section>

        {/* Emotional Closing */}
        <section className="text-center space-y-12 max-w-4xl mx-auto mb-20 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-light text-foreground/90 leading-relaxed">
              This day is yours.
            </p>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
              Keep dreaming, keep exploring, keep shining —
            </p>
            <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              The future belongs to you.
            </p>
          </div>

          {/* Mentor signature */}
          <div className="pt-12 border-t border-primary/20 animate-fade-in" style={{ animationDelay: "1.3s" }}>
            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-muted-foreground">
              <Heart className="w-6 h-6 text-neon-pink animate-glow-pulse" />
              <span className="font-light">With love and pride,</span>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-primary mt-4">
              Your mentor, Venkata Ramu Gollapalli
            </p>
          </div>
        </section>

        {/* Floating particles decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
