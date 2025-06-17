
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, TrendingUp, Shield, Clock } from 'lucide-react';

const SteuerTradingBotTestimonials = () => {
  const testimonials = [
    {
      name: "Michael K.",
      location: "München",
      profit: "+€847",
      timeframe: "14 Tage",
      rating: 5,
      comment: "Bitloon läuft seit 2 Wochen völlig automatisch. Kein Stress mehr mit Charts analysieren!"
    },
    {
      name: "Sandra M.",
      location: "Berlin", 
      profit: "+€1,234",
      timeframe: "3 Wochen",
      rating: 5,
      comment: "Endlich kann ich entspannt schlafen, während der Bot für mich arbeitet. Geniale Technologie!"
    },
    {
      name: "Thomas R.",
      location: "Hamburg",
      profit: "+€2,103",
      timeframe: "1 Monat",
      rating: 4,
      comment: "Nach anfänglicher Skepsis bin ich begeistert. Der Bot macht keine emotionalen Fehler."
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "24/7 Trading",
      description: "Vollautomatischer Handel rund um die Uhr"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Risikomanagement", 
      description: "Intelligente Stop-Loss und Take-Profit Strategien"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Sofort startklar",
      description: "Setup in unter 5 Minuten"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main CTA Card */}
      <Card className="border-2 border-finance-primary/20 bg-gradient-to-br from-finance-secondary/30 to-white">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-finance-primary rounded-full flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-finance-primary font-nexa">
            Bitloon Trading Bot
          </CardTitle>
          <p className="text-muted-foreground font-nexa">
            Der autonome KI-Bot für Krypto-Trading
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Features */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-finance-primary mt-0.5">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm font-nexa">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground font-nexa">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Promo */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
            <Badge className="bg-yellow-500 text-white mb-2 font-nexa">
              EXKLUSIV für Leser
            </Badge>
            <p className="text-sm font-semibold text-yellow-800 font-nexa">
              50€ Startguthaben mit Code "FINANCE"
            </p>
          </div>

          {/* CTA Button */}
          <Button className="w-full bg-finance-primary hover:bg-finance-primary/90 font-nexa">
            Jetzt Bitloon testen
          </Button>
          
          <p className="text-xs text-center text-muted-foreground font-nexa">
            ⚡ Limitierte Lizenzen verfügbar
          </p>
        </CardContent>
      </Card>

      {/* Testimonials */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg text-center font-nexa">
          Das sagen unsere Nutzer:
        </h3>
        
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-sm font-nexa">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground font-nexa">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600 font-nexa">{testimonial.profit}</p>
                  <p className="text-xs text-muted-foreground font-nexa">{testimonial.timeframe}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-xs text-gray-700 italic font-nexa">
                "{testimonial.comment}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Disclaimer */}
      <Card className="border-orange-200 bg-orange-50/30">
        <CardContent className="p-4">
          <p className="text-xs text-orange-700 leading-relaxed font-nexa">
            <strong>Risikohinweis:</strong> Trading birgt Verlustrisiken. 
            Vergangene Ergebnisse sind keine Garantie für zukünftige Gewinne. 
            Investieren Sie nur, was Sie sich leisten können zu verlieren.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SteuerTradingBotTestimonials;
