
import { StarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const SteuerTradingBotTestimonials = () => {
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

  const handleButtonClick = () => {
    window.open('https://ai-bitloon.com', '_blank');
  };

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
          
          <div className="mb-4 p-3 bg-finance-success/10 border border-finance-success/20 rounded-lg">
            <p className="text-sm font-medium text-finance-success font-nexa mb-1">
              🎁 Exklusiv mit Code: <strong>FINANCE</strong>
            </p>
            <p className="text-xs text-muted-foreground font-nexa">
              50€ Startguthaben geschenkt
            </p>
          </div>
          
          <button 
            onClick={handleButtonClick}
            className="w-full bg-finance-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-nexa font-medium"
          >
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
      <Card className="border border-border">
        <CardHeader>
          <h3 className="text-xl font-bold text-foreground font-nexa">
            Bitloon Features
          </h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-foreground font-nexa">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              24/7 automatisierte Trades
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              KI-basierte Marktanalyse
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              Intelligentes Risikomanagement
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              Mehrere Kryptowährungen unterstützt
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SteuerTradingBotTestimonials;
