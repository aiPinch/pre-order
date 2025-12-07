import { Heart } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

export const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Кто делает <span className="text-gradient">Pinch</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pinch делают люди, которые сами прошли через тревогу за здоровье и устали от общих советов «меняйте образ жизни». Мы опираемся на научные данные и истории реальных людей, а не на чудо-обещания.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
