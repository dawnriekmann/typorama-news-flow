
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ClockIcon } from 'lucide-react';
import Header from '@/components/Header';

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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header showBreadcrumb={true} breadcrumbItems={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back button */}
        <Button variant="ghost" onClick={() => window.history.back()} className="mb-8 text-gray-600 hover:text-gray-800">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Zurück zur Übersicht
        </Button>

        {/* Article header */}
        <header className="mb-12">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded">
              KRYPTO
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Bitcoin ETF Zulassung: Institutioneller Durchbruch für Kryptowährungen
          </h1>

          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm mb-8">
            <span>Von Dr. Sarah Müller</span>
            <span>15. Januar 2025, 14:30 Uhr</span>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>8 Min. Lesezeit</span>
            </div>
          </div>
        </header>

        {/* Main image */}
        <figure className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop" 
            alt="Bitcoin ETF Zulassung"
            className="w-full h-auto rounded-lg"
          />
          <figcaption className="mt-3 text-sm text-gray-600 text-center">
            Die SEC-Zulassung von Bitcoin ETFs markiert einen Wendepunkt für institutionelle Krypto-Investments. 
            <span className="block mt-1 text-xs">Getty Images / Verwendung mit Lizenz</span>
          </figcaption>
        </figure>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          {articleSections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {section.title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                {section.content}
              </p>
            </section>
          ))}
        </article>

        {/* Author info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Über die Autorin</h3>
            <p className="text-gray-700">
              <strong>Dr. Sarah Müller</strong> ist Senior Finanzanalystin bei FinanceToday mit über 15 Jahren Erfahrung 
              in der Finanzanalyse. Sie promovierte in Volkswirtschaftslehre mit Spezialisierung auf 
              Finanzmarktregulierung und Kryptowährungen.
            </p>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-8 text-sm text-gray-600">
          <h4 className="font-semibold mb-2">Quellen:</h4>
          <ul className="space-y-1">
            <li>• Securities and Exchange Commission (SEC)</li>
            <li>• Bloomberg Terminal - Marktdaten</li>
            <li>• CoinGecko API</li>
            <li>• Grayscale Investments</li>
            <li>• BlackRock iShares</li>
          </ul>
          <p className="mt-4 text-xs">Letztes Update: 15. Januar 2025, 16:45 Uhr</p>
        </div>
      </div>
    </div>
  );
};

export default News;
