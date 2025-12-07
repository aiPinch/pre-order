import { Target, Zap, Shield, Info } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Target,
    title: "Персональные микрошаги",
    description: "Не общие рекомендации, а конкретные действия, подобранные под ваши анализы, привычки и образ жизни.",
  },
  {
    icon: Zap,
    title: "Встраивается в ваш день",
    description: "Каждый шаг занимает минуты, не требует силы воли на уровне героя и не ломает ваш привычный ритм.",
  },
  {
    icon: Shield,
    title: "Научная база без «чудо-обещаний»",
    description: "Опираемся на исследования и доказательную медицину. Честно говорим, что работает, а что — маркетинг.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Вместо общих советов —{" "}
              <span className="text-gradient">конкретные микрошаги под вас</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pinch превращает «надо изменить образ жизни» в понятный план действий
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Disclaimer - styled to match site design */}
        <ScrollReveal delay={300}>
          <div className="max-w-3xl mx-auto">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Важно</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Pinch — это инструмент для формирования здоровых привычек, а не медицинский сервис. Мы не заменяем врача и не ставим диагнозы.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
