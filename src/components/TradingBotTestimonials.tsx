import { StarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TradingBotTestimonials = () => {
  const testimonials = [
    {
      name: "Marcus Weber",
      role: "Buchhalter",
      rating: 5,
      text: "Braun Investments hat meine Erwartungen übertroffen! 4,1% Zinsen auf mein Festgeld - endlich bekomme ich wieder etwas für mein Geld. Die Abwicklung war unkompliziert und transparent.",
      profit: "4,1%"
    },
    {
      name: "Sarah Fischer",
      role: "Lehrerin",
      text: "Als Lehrerin spare ich für meine Rente. Bei Braun Investments bekomme ich 3,2% auf mein Tagesgeld - deutlich mehr als bei meiner Hausbank. Endlich lohnt sich das Sparen wieder!",
      rating: 5,
      profit: "3,2%"
    },
    {
      name: "Thomas Klein",
      role: "Ingenieur",
      text: "Ich war skeptisch, aber Braun Investments hat mich überzeugt. 4,1% Festgeld für 12 Monate, 100% sicher. Meine 25.000€ bringen mir jetzt über 1.000€ Zinsen im Jahr.",
      rating: 4,
      profit: "4,1%"
    },
    {
      name: "Lisa Meier",
      role: "Krankenschwester",
      text: "Endlich eine Alternative zu den Nullzinsen! Bei Braun Investments bekomme ich faire Zinsen auf meine Ersparnisse. Kein Girokonto nötig, alles digital und einfach.",
      rating: 5,
      profit: "3,8%"
    }
  ];

  const handleButtonClick = () => {
    window.open('https://braun-investments.de/finanzen/santander-bank', '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 font-nexa">
          Braun Investments Erfahrungen
        </h2>
        <p className="text-muted-foreground text-lg font-nexa">
          Echte Kunden berichten über ihre Zinserträge
        </p>
      </div>

      {/* Call-to-Action Box */}
      <Card className="border-finance-primary bg-finance-secondary/20">
        <CardHeader className="text-center pb-4">
          <div className="mb-2">
            <img 
              src="/lovable-uploads/b634b9ff-3948-47c4-8f26-3fe2e8e665c5.png" 
              alt="Braun Investments Logo"
              className="mx-auto h-16 w-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground font-nexa">
            Festgeld & Tagesgeld Angebote
          </p>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-finance-primary mb-2 font-nexa">
            Bis zu 4,1% Zinsen
          </div>
          <p className="text-sm text-muted-foreground mb-4 font-nexa">
            Garantierte Festgeldzinsen für 12 Monate
          </p>
          
          <div className="mb-4 p-3 bg-finance-primary/10 border border-finance-primary/20 rounded-lg">
            <p className="text-sm font-medium text-finance-primary font-nexa mb-1">
              ⏰ Begrenztes Kontingent verfügbar
            </p>
            <p className="text-xs text-muted-foreground font-nexa">
              Jetzt sichern - nur für Neukunden
            </p>
          </div>
          
          <button 
            onClick={handleButtonClick}
            className="w-full bg-finance-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-nexa font-medium"
          >
            Jetzt Zinsen sichern
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
            Braun Investments Vorteile
          </h3>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-foreground font-nexa">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              Nur für Neukunden
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              Begrenztes Kontingent
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              100 % Einlagensicherung
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-finance-primary rounded-full"></div>
              Ohne Girokonto
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingBotTestimonials;
