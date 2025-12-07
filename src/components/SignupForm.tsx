import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { logFormSubmission } from "@/lib/telegram";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isPreorder, setIsPreorder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkPreorder = () => {
      const preorder = sessionStorage.getItem('pinch-preorder');
      setIsPreorder(preorder === 'true');
    };
    checkPreorder();
    
    // Listen for scroll events to check preorder flag
    const handleScroll = () => checkPreorder();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !contact.trim()) {
      toast({
        title: "Заполните все поля",
        description: "Укажите ваше имя и email или Telegram",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Log form submission to Telegram
    await logFormSubmission(
      isPreorder ? 'form_submit_preorder' : 'form_submit_early_access',
      { name: name.trim(), contact: contact.trim() }
    );
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    sessionStorage.removeItem('pinch-preorder');
    
    toast({
      title: isPreorder ? "Предзаказ оформлен!" : "Вы записаны!",
      description: "Мы свяжемся с вами, когда продукт будет готов",
    });
  };

  if (isSubmitted) {
    return (
      <section id="signup" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Спасибо за интерес!</h2>
            <p className="text-muted-foreground text-lg">
              Мы добавили вас в список ожидания и свяжемся, когда Pinch будет готов к запуску.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isPreorder ? (
                <>Оформить <span className="text-gradient">предзаказ</span></>
              ) : (
                <>Запишитесь в <span className="text-gradient">ранний доступ</span></>
              )}
            </h2>
            <p className="text-muted-foreground text-lg">
              {isPreorder 
                ? "Зафиксируйте интерес к платной версии Pinch"
                : "Будьте среди первых, кто попробует Pinch"
              }
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="rounded-2xl gradient-card border border-border/50 p-8 shadow-card">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Как к вам обращаться"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                    Email или Telegram
                  </label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="email@example.com или @username"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="h-12 bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="hero"
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    {isPreorder ? "Оформить предзаказ" : "Записаться в ранний доступ"}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
              
              {isPreorder && (
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Сервис будет платным (подписка). Сейчас идёт ранний доступ и сбор интереса — никакой оплаты пока нет.
                </p>
              )}
            </div>
          </form>
          
          {/* Toggle */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setIsPreorder(!isPreorder)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isPreorder 
                ? "← Вернуться к бесплатному раннему доступу"
                : "Хотите оформить предзаказ на платную версию? →"
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
