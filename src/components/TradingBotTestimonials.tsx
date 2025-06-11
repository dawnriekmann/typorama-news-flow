import { StarIcon, Bot, TrendingUp, Shield, Coins } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TradingBotTestimonials = () => {
  const testimonials = [
    {
      name: "Marcus Weber",
      role: "Privatinvestor",
      rating: 5,
      text: "Bitloon hat meine Erwartungen übertroffen! Der automatisierte Trading-Bot läuft 24/7 und macht profitable Trades, während ich schlafe. Besonders die KI-basierte Marktanalyse ist beeindruckend.",
      profit: "+34%"
    },
    {
      name: "Sarah Fischer",
      role: "Finanzberaterin",
      text: "Als Finanzberaterin war ich skeptisch gegenüber Trading-Bots. Bitloon hat mich aber überzeugt - die Algorithmen sind sehr ausgereift und das Risikomanagement funktioniert einwandfrei.",
      rating: 5,
      profit: "+23%"
    },
    {
      name: "Thomas Klein",
      role: "Day Trader",
      text: "Endlich ein Bot, der wirklich funktioniert! Bitloon hat meine manuellen Trading-Ergebnisse deutlich übertroffen. Die automatische Ausführung ist präzise und schnell.",
      rating: 4,
      profit: "+29%"
    },
    {
      name: "Lisa Meier",
      role: "Krypto-Enthusiastin",
      text: "Ich nutze Bitloon seit 3 Monaten und bin begeistert. Der Bot erkennt Markttrends früh und macht profitable Trades. Das passive Einkommen aus Krypto-Trading ist großartig!",
      rating: 5,
      profit: "+17%"
    }
  ];

  const features = [
    {
      icon: Bot,
      title: "24/7 automatisierte Trades",
      description: "Nie wieder verpasste Gelegenheiten"
    },
    {
      icon: TrendingUp,
      title: "KI-basierte Marktanalyse",
      description: "Intelligente Algorithmen erkennen Trends"
    },
    {
      icon: Shield,
      title: "Intelligentes Risikomanagement",
      description: "Sicherer Schutz Ihres Kapitals"
    },
    {
      icon: Coins,
      title: "Mehrere Kryptowährungen",
      description: "Bitcoin, Ethereum und weitere unterstützt"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 font-nexa">
          Bitloon Erfahrungen
        </h2>
        <p className="text-muted-foreground text-lg font-nexa">
          Echte Nutzer berichten über ihre Erfolge
        </p>
      </div>

      {/* Call-to-Action Box */}
      <Card className="border-finance-primary bg-finance-secondary/20">
        <CardHeader className="text-center pb-4">
          <div className="mb-2">
            <img 
              src="https://i.imgur.com/Q191f5z.png" 
              alt="Bitloon Logo"
              className="mx-auto h-16 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground font-nexa">
            Automatisierte Krypto Trades
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-finance-success mb-2 font-nexa">
            Ø +30.2% Gewinn
          </div>
          <p className="text-sm text-muted-foreground mb-4 font-nexa">
            Durchschnittlicher Profit unserer Nutzer
          </p>
          <button className="w-full bg-finance-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-nexa font-medium">
            Jetzt Zugang sichern
          </button>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground font-nexa">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-nexa">
                    {testimonial.role}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-finance-success font-bold text-lg font-nexa">
                    {testimonial.profit}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground leading-relaxed font-nexa">
                "{testimonial.text}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features */}
      <Card className="border border-finance-primary/20 bg-gradient-to-br from-finance-secondary/30 to-finance-accent/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-finance-primary/5 to-transparent"></div>
        <CardHeader className="relative z-10 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-finance-primary rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-nexa">
              Bitloon Features
            </h3>
          </div>
          <p className="text-muted-foreground font-nexa">
            Modernste Technologie für Ihren Trading-Erfolg
          </p>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-finance-primary/10 hover:border-finance-primary/20 transition-all duration-300 hover:shadow-md group">
                  <div className="w-12 h-12 bg-finance-primary/10 rounded-xl flex items-center justify-center group-hover:bg-finance-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-finance-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground font-nexa mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-nexa">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 p-4 bg-finance-success/10 rounded-lg border border-finance-success/20">
            <div className="flex items-center gap-2 text-finance-success font-nexa font-medium">
              <TrendingUp className="w-5 h-5" />
              <span>Durchschnittlich 30%+ Gewinn pro Monat</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingBotTestimonials;
