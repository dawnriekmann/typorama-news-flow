
import { ClockIcon } from 'lucide-react';
import Header from '@/components/Header';
import StarRating from '@/components/StarRating';
import TradingBotTestimonials from '@/components/TradingBotTestimonials';

const News = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Krypto', href: '#krypto' },
    { label: 'Artikel' }
  ];

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
    <div className="min-h-screen bg-background text-foreground font-nexa">
      <Header showBreadcrumb={true} breadcrumbItems={breadcrumbItems} />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Article */}
          <div className="lg:col-span-2">
            {/* Article header */}
            <header className="mb-10">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground font-nexa">
                Bitcoin ETF Zulassung: Institutioneller Durchbruch für Kryptowährungen
              </h1>

              {/* Star Rating */}
              <div className="mb-6">
                <StarRating rating={4.5} reviewCount={127} />
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-xl mb-8 font-nexa">
                <span className="font-medium">Von Dr. Sarah Müller</span>
                <span>15. Januar 2025, 14:30 Uhr</span>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5" />
                  <span>8 Min. Lesezeit</span>
                </div>
              </div>
            </header>

            {/* Main image */}
            <figure className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=700&fit=crop" 
                alt="Bitcoin ETF Zulassung"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <figcaption className="mt-4 text-lg text-muted-foreground leading-relaxed font-nexa">
                Die SEC-Zulassung von Bitcoin ETFs markiert einen Wendepunkt für institutionelle Krypto-Investments.
              </figcaption>
            </figure>

            {/* Article content */}
            <article className="max-w-none">
              {articleSections.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight font-nexa">
                    {section.title}
                  </h2>
                  <p className="text-xl leading-relaxed text-foreground mb-4 font-light font-nexa">
                    {section.content}
                  </p>
                </section>
              ))}
            </article>
          </div>

          {/* Right Column - Trading Bot Testimonials */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <TradingBotTestimonials />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-8">
            {/* Logo Section - Left */}
            <div className="flex items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-finance-primary">
                  FinanceToday
                </h2>
                <div className="text-sm text-muted-foreground font-light tracking-wide">
                  Vertrauenswürdige Finanz-Nachrichten
                </div>
              </div>
            </div>

            {/* Links - Right */}
            <div className="flex items-center gap-6 text-base text-muted-foreground font-nexa">
              <a href="#impressum" className="hover:text-finance-primary transition-colors">
                Impressum
              </a>
              <a href="#datenschutz" className="hover:text-finance-primary transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
