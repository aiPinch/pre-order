import { Button } from "@/components/ui/button";
import { PinchLogo } from "@/components/PinchLogo";

export const Header = () => {
  const scrollToForm = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: "Кому подходит", href: "#who-is-it-for" },
    { label: "Как работает", href: "#how-it-works" },
    { label: "Преимущества", href: "#benefits" },
    { label: "Прогресс", href: "#progress" },
    { label: "FAQ", href: "#faq" },
    { label: "Напишите нам", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <PinchLogo className="h-8" />
          </a>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button onClick={scrollToForm} size="sm">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};
