import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const SurpriseGate = ({ onReveal }: { onReveal: () => void }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-background overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="relative z-10 text-center space-y-12 px-4">
        <div className="space-y-4 animate-fade-in">
          <Sparkles className="w-20 h-20 mx-auto text-primary animate-glow-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            Something Special Awaits
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            A moment crafted just for you
          </p>
        </div>

        <Button
          onClick={onReveal}
          size="lg"
          className="group relative px-12 py-8 text-xl font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple hover:shadow-[0_0_60px_hsl(189_85%_60%_/_0.8)] transition-all duration-500 animate-scale-in"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="relative z-10 flex items-center gap-3">
            Unlock The Surprise
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-lg" />
        </Button>

        <p className="text-sm text-muted-foreground/60 animate-fade-in" style={{ animationDelay: "1s" }}>
          Click when you're ready...
        </p>
      </div>
    </div>
  );
};
