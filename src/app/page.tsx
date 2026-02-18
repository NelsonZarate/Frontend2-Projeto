import GlitchText from "@/components/GlitchText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans bg-background text-foreground">
     <GlitchText
                speed={4}
                enableShadows
                enableOnHover={false}
                className="custom-class"
              >
                PartyFinder
              </GlitchText>

           <p className="font-display"> eu sou gamer </p>
    </div>
  );
}
