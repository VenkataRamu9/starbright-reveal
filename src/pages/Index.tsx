import { useState } from "react";
import { LoadingState } from "@/components/LoadingState";
import { SurpriseGate } from "@/components/SurpriseGate";
import { RevealAnimation } from "@/components/RevealAnimation";
import { MainContent } from "@/components/MainContent";

type Stage = "loading" | "gate" | "reveal" | "content";

const Index = () => {
  const [stage, setStage] = useState<Stage>("loading");

  return (
    <>
      {stage === "loading" && <LoadingState onComplete={() => setStage("gate")} />}
      {stage === "gate" && <SurpriseGate onReveal={() => setStage("reveal")} />}
      {stage === "reveal" && <RevealAnimation onComplete={() => setStage("content")} />}
      {stage === "content" && <MainContent />}
    </>
  );
};

export default Index;
