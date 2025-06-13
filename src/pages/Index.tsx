
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div>
          <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-tight text-finance-primary mb-4">
            FinanceToday
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            Vertrauenswürdige Finanz-Nachrichten
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="w-32 h-1 bg-gradient-to-r from-finance-primary to-finance-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            Wir arbeiten an etwas Großartigem
          </p>
          <p className="text-sm text-muted-foreground/70">
            Bald verfügbar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
