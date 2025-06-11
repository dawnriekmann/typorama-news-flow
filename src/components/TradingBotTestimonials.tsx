
import { StarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TradingBotTestimonials = () => {
  const testimonials = [
    {
      name: "Marcus Weber",
      role: "Privatinvestor",
      rating: 5,
      text: "Seit ich den KryptoBot verwende, sind meine Bitcoin-Trades viel erfolgreicher geworden. Die ETF-News haben mir geholfen, zum perfekten Zeitpunkt einzusteigen.",
      profit: "+127%"
    },
    {
      name: "Sarah Fischer",
      role: "Finanzberaterin",
      text: "Der Bot hat meine Erwartungen übertroffen. Besonders bei der ETF-Zulassung hat er automatisch die besten Entry-Points gefunden.",
      rating: 5,
      profit: "+89%"
    },
    {
      name: "Thomas Klein",
      role: "Day Trader",
      text: "Endlich ein Bot, der wirklich funktioniert! Die Algorithmen reagieren perfekt auf Marktnachrichten wie die SEC-Entscheidung.",
      rating: 4,
      profit: "+156%"
    },
    {
      name: "Lisa Meier",
      role: "Krypto-Enthusiastin",
      text: "Ich war skeptisch, aber die Ergebnisse sprechen für sich. Der Bot hat mir geholfen, von der ETF-Rally zu profitieren.",
      rating: 5,
      profit: "+203%"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 font-nexa">
          Trading Bot Erfahrungen
        </h2>
        <p className="text-muted-foreground text-lg font-nexa">
          Echte Nutzer berichten über ihre Erfolge
        </p>
      </div>

      {/* Call-to-Action Box */}
      <Card className="border-finance-primary bg-finance-secondary/20">
        <CardHeader className="text-center pb-4">
          <h3 className="text-2xl font-bold text-finance-primary font-nexa">
            KryptoBot Pro
          </h3>
          <p className="text-sm text-muted-foreground font-nexa">
            Automatisierte Bitcoin & ETF Trades
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-finance-success mb-2 font-nexa">
            Ø +142% Gewinn
          </div>
          <p className="text-sm text-muted-foreground mb-4 font-nexa">
            Durchschnittlicher Profit unserer Nutzer
          </p>
          <button className="w-full bg-finance-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-nexa font-medium">
            Jetzt 7 Tage kostenlos testen
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
            Bot Features
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
              Risikomanagement
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              ETF & Bitcoin Integration
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingBotTestimonials;
