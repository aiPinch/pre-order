import { Mail, Users, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Mail,
    text: "Мы напишем вам, когда первый рабочий прототип будет готов.",
  },
  {
    icon: Users,
    text: "Пригласим в ранний доступ и попросим честную обратную связь.",
  },
  {
    icon: CreditCard,
    text: "До любого платного запуска честно покажем модель и ориентир стоимости.",
  },
];

export const WhatHappensNext = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Что будет после того, как{" "}
            <span className="text-gradient">вы оставите контакт</span>
          </h2>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-foreground text-lg leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
