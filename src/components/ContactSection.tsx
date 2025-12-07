import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";
import { logContactMessage } from "@/lib/telegram";
import { toast } from "sonner";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !contact.trim() || !message.trim()) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await logContactMessage({
        name: name.trim(),
        contact: contact.trim(),
        message: message.trim(),
      });
      
      toast.success("Сообщение отправлено! Мы свяжемся с вами.");
      setName("");
      setContact("");
      setMessage("");
    } catch (error) {
      toast.error("Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Напишите нам
            </h2>
            <p className="text-muted-foreground">
              Есть вопрос или предложение? Мы всегда рады обратной связи.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-card/50 border-border/50 focus:border-primary/50"
              />
              <Input
                placeholder="Email или Telegram"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="bg-card/50 border-border/50 focus:border-primary/50"
              />
            </div>
            
            <Textarea
              placeholder="Ваше сообщение..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-card/50 border-border/50 focus:border-primary/50 resize-none"
            />
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Отправка..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};