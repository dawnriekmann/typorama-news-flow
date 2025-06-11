
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeftIcon, ClockIcon, ShareIcon, CheckCircleIcon, ShieldIcon } from 'lucide-react';
import StarRating from './StarRating';

interface BitcoinArticleProps {
  onBack: () => void;
}

const BitcoinArticle = ({ onBack }: BitcoinArticleProps) => {
  const articleSections = [
    {
      title: "Historische Entscheidung der SEC",
      content: "Die Securities and Exchange Commission (SEC) hat nach jahrelangen intensiven Verhandlungen und regulatorischen Prüfungen endlich die Zulassung für Bitcoin Exchange Traded Funds (ETFs) erteilt. Diese bahnbrechende Entscheidung markiert einen Wendepunkt in der Geschichte der Kryptowährungen und öffnet institutionellen Anlegern erstmals den Weg zu regulierten Bitcoin-Investments. Die Genehmigung umfasst zunächst elf verschiedene ETF-Anbieter, darunter BlackRock, Fidelity und Grayscale, die zusammen ein verwaltetes Vermögen von über 2 Billionen US-Dollar repräsentieren."
    },
    {
      title: "Auswirkungen auf den Bitcoin-Kurs",
      content: "Seit der offiziellen Ankündigung verzeichnet Bitcoin einen beispiellosen Kursanstieg von über 35% innerhalb von 48 Stunden. Das Handelsvolumen erreichte mit 67 Milliarden US-Dollar einen neuen Rekordwert, während der Bitcoin-Preis die psychologisch wichtige Marke von 50.000 US-Dollar durchbrach. Marktexperten sprechen von einer 'institutionellen FOMO' (Fear of Missing Out), da große Vermögensverwalter nun endlich rechtssicher in den Kryptomarkt einsteigen können. Die Volatilität bleibt jedoch charakteristisch hoch, was Anleger zur Vorsicht mahnt."
    },
    {
      title: "Institutionelle Investoren im Fokus",
      content: "Pensionsfonds, Versicherungsunternehmen und Family Offices zeigen bereits reges Interesse an den neuen Bitcoin ETFs. Diese regulierten Anlageprodukte bieten institutionellen Investoren erstmals die Möglichkeit, Bitcoin-Exposure zu erlangen, ohne direkte Custody-Risiken eingehen zu müssen. Erste Analysen deuten darauf hin, dass bereits in der ersten Handelswoche über 1,2 Milliarden US-Dollar in die neuen ETFs geflossen sind. Dies entspricht etwa 24.000 Bitcoin, die aus dem zirkulierenden Angebot genommen wurden."
    },
    {
      title: "Vergleich zu internationalen Märkten",
      content: "Während die USA nun nachziehen, haben Kanada und mehrere europäische Länder bereits seit 2021 Bitcoin ETFs zugelassen. Der kanadische Purpose Bitcoin ETF verwaltet mittlerweile über 1,5 Milliarden CAD, während europäische ETPs (Exchange Traded Products) stetig wachsende Zuflüsse verzeichnen. Die US-Zulassung gilt jedoch als Katalysator für die globale Krypto-Adoption, da der amerikanische Markt traditionell als Leitmarkt für Finanzinnovationen fungiert. Experten erwarten nun ähnliche Entwicklungen in asiatischen Märkten."
    },
    {
      title: "Risiken und Herausforderungen",
      content: "Trotz der positiven Entwicklungen warnen Regulatoren und Finanzexperten vor den inhärenten Risiken von Bitcoin-Investments. Die extreme Volatilität, regulatorische Unsicherheiten in anderen Jurisdiktionen und die noch immer bestehende Korrelation zu Risiko-Assets bleiben zentrale Herausforderungen. Anleger sollten Bitcoin ETFs als hochspekulative Beimischung betrachten und nicht mehr als 2-5% ihres Portfolios in Kryptowährungen investieren. Zudem unterliegen die ETFs den üblichen Gebührenstrukturen, die die Gesamtrendite beeinflussen können."
    },
    {
      title: "Expertenstimmen aus der Branche",
      content: "'Dies ist der Beginn einer neuen Ära für institutionelle Krypto-Investments', erklärt Michael Sonnenshein, CEO von Grayscale. BlackRock-Chef Larry Fink, einst Krypto-Skeptiker, bezeichnete Bitcoin nun als 'legitime Anlageklasse'. Fed-Chair Jerome Powell betonte jedoch die Wichtigkeit kontinuierlicher regulatorischer Überwachung. Krypto-Pionier Andreas Antonopoulos warnt vor einer möglichen Zentralisierung durch institutionelle Dominanz, während Galaxy Digital-Gründer Mike Novogratz von einem 'historischen Moment' spricht."
    },
    {
      title: "Ausblick und Marktprognosen",
      content: "Analysten prognostizieren für 2025 weitere ETF-Zulassungen für andere Kryptowährungen, insbesondere Ethereum. JPMorgan schätzt, dass Bitcoin ETFs innerhalb von zwei Jahren über 100 Milliarden US-Dollar verwalten könnten. Goldman Sachs erhöhte sein Bitcoin-Kursziel auf 75.000 US-Dollar bis Ende 2025. Langfristig könnte die institutionelle Adoption zu einer Stabilisierung der Volatilität führen, auch wenn Bitcoin seiner Natur nach eine volatile Anlageklasse bleiben wird. Die Entwicklung weiterer regulatorischer Rahmenbedingungen wird entscheidend für die nachhaltige Integration von Kryptowährungen ins traditionelle Finanzsystem sein."
    }
  ];

  return (
    <article className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Zurück zur Übersicht
        </Button>
      </div>

      {/* Hero image */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop" 
          alt="Bitcoin ETF Zulassung"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-sm mb-2">Die SEC-Zulassung von Bitcoin ETFs markiert einen Wendepunkt für institutionelle Krypto-Investments</p>
          <p className="text-xs text-gray-300">Getty Images / Verwendung mit Lizenz</p>
        </div>
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Article header */}
          <div className="bg-background rounded-lg p-8 mb-8 shadow-lg border">
            <Badge className="mb-4 bg-finance-primary text-white">
              KRYPTO
            </Badge>
            
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
              Bitcoin ETF Zulassung: Institutioneller Durchbruch für Kryptowährungen
            </h1>
            
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b5eb?w=100&h=100&fit=crop&crop=face" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">Dr. Sarah Müller</p>
                    <p className="text-sm text-muted-foreground">Senior Finanzanalystin</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <span>15. Januar 2025, 14:30 Uhr</span>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>8 Min. Lesezeit</span>
                  </div>
                </div>
              </div>
              
              <StarRating rating={4.5} reviewCount={127} />
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Artikel teilen
                </Button>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircleIcon className="w-4 h-4 text-green-600" />
                  <span>Fact-checked</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <ShieldIcon className="w-4 h-4 text-finance-primary" />
                  <span>Redaktionell geprüft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article body */}
          <div className="bg-background rounded-lg p-8 shadow-lg border">
            <div className="article-content space-y-8">
              {articleSections.map((section, index) => (
                <section key={index}>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className={`text-foreground leading-relaxed text-base lg:text-lg ${index === 0 ? 'drop-cap' : ''}`}>
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
            
            <Separator className="my-8" />
            
            {/* Risk Disclaimer */}
            <Card className="border-orange-200 bg-orange-50/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3 text-orange-800">Risikohinweis</h4>
                <p className="text-sm text-orange-700 leading-relaxed">
                  Kryptowährungen sind hochvolatile, unregulierte Anlageprodukte. Kein EU-Anlegerschutz. 
                  Ihr Kapital ist gefährdet. Vergangene Wertentwicklungen sind kein Indikator für zukünftige Ergebnisse. 
                  Investieren Sie nur, was Sie sich leisten können zu verlieren.
                </p>
              </CardContent>
            </Card>
            
            <Separator className="my-8" />
            
            {/* Author info */}
            <div className="flex items-start space-x-4 p-6 bg-secondary/30 rounded-lg">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b5eb?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-lg mb-1">Dr. Sarah Müller</h4>
                <p className="text-sm text-muted-foreground mb-2">Senior Finanzanalystin bei FinanceToday</p>
                <p className="text-sm text-muted-foreground">
                  Dr. Müller verfügt über 15 Jahre Erfahrung in der Finanzanalyse mit Schwerpunkt auf 
                  Kryptowährungen und digitale Assets. Promovierte Volkswirtin mit Spezialisierung auf 
                  Finanzmarktregulierung.
                </p>
              </div>
            </div>
            
            {/* Sources */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">Quellen und Referenzen</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Securities and Exchange Commission (SEC) - Offizielle Pressemitteilung</li>
                <li>• Bloomberg Terminal - Marktdaten und Handelsvolumen</li>
                <li>• CoinGecko API - Bitcoin Kursdaten</li>
                <li>• Grayscale Investments - Unternehmenskommunikation</li>
                <li>• BlackRock iShares - ETF Prospekte</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Letztes Update: 15. Januar 2025, 16:45 Uhr
              </p>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <Card className="mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Bleiben Sie informiert</h3>
              <p className="text-muted-foreground mb-6">
                Erhalten Sie täglich die wichtigsten Finanz-News direkt in Ihr Postfach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Ihre E-Mail-Adresse"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-primary"
                />
                <Button className="bg-finance-primary hover:bg-finance-primary/90">
                  Anmelden
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Kostenlos und jederzeit abbestellbar. Datenschutz garantiert.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
};

export default BitcoinArticle;
