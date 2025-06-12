
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
      title: "Rechnen statt Raten: Der neue Weg, im Krypto-Markt Geld zu verdienen",
      content: "Hamburg-Altona, Dienstagmorgen. Draußen Nieselregen, drinnen flackern leuchtende Kursbewegungen über sechs Monitore. Jonas M. sitzt entspannt vor seiner Trading-Umgebung. „Ich analysiere hier nichts mehr selbst", sagt er mit einem leichten Grinsen. „Das übernimmt längst Bitloon." Was klingt wie Zukunftsmusik, ist für Jonas Alltag: Ein vollautomatischer Krypto-Trading-Bot, der eigenständig handelt, auswertet und Gewinne realisiert – rund um die Uhr."
    },
    {
      title: "Vom Excel-Angestellten zum Architekten eines autonomen Systems",
      content: "Vor drei Jahren noch arbeitete Jonas in einem Großkonzern – lange Meetings, starre Abläufe. In seiner Freizeit begann er, sich intensiv mit dem Kryptomarkt und maschinellem Lernen zu beschäftigen. Was ihn faszinierte: die Unberechenbarkeit menschlichen Verhaltens – und die Vorhersagbarkeit von Mustern dahinter. „Irgendwann wurde mir klar, dass ich nicht selbst besser werden musste – ich musste einen bauen, der automatisch besser handelt als ich." Die Idee zu Bitloon war geboren."
    },
    {
      title: "Der Bot: Bitloon",
      content: "Bitloon ist ein autonomer Trading-Bot, speziell für den hochvolatilen Kryptomarkt entwickelt. Anders als Signal-Dienste oder halbautomatische Tools handelt Bitloon vollständig selbstständig – ohne menschliche Bestätigung oder manuelle Eingriffe. Was Bitloon auswertet: Kursbewegungen in Echtzeit auf Plattformen wie Binance, Coinbase, Kraken; Wallet-Aktivitäten großer Marktteilnehmer (sog. „Whales") direkt aus der Blockchain; Marktstimmungen aus Krypto-Twitter, Telegram-Gruppen und Newsfeeds; On-Chain-Daten: Liquidität, Volumen, Transaktionshäufungen; Korrelationen und Volatilitätszonen zwischen BTC, ETH, SOL, uvm."
    },
    {
      title: "Der Praxistest: 200 € Start – 543 € Ergebnis",
      content: "Wir wollten es wissen: Funktioniert Bitloon wirklich? Jonas richtet gemeinsam mit uns ein Testkonto bei einem regulierten Krypto-Broker ein. Startkapital: 200 €. Bitloon wird aktiviert, im konservativen Modus (geringes Risiko, harte Stop-Loss-Grenzen). Überwachungszeitraum: 28 Stunden – keine manuellen Eingriffe, keine Anpassungen. Das Ergebnis: 543 € Kontostand nach Ablauf der Testphase. Bitloon führte über 60 Einzel-Trades aus – größtenteils kleine Profite, aber mit hoher Trefferquote und fast ohne Drawdown."
    },
    {
      title: "Kein Bauchgefühl. Kein Chart-Gefluche. Nur Wahrscheinlichkeiten.",
      content: "Jonas betont: Bitloon ersetzt nicht den Verstand – aber er ersetzt die Emotion. Wo viele Hobby-Trader bei jedem Dip nervös werden, bleibt Bitloon stoisch. Reagiert nur auf Daten. Und genau das scheint den Unterschied zu machen. „Ich verspreche niemandem Reichtum. Aber ich zeige, dass es eine Alternative gibt zu Panik, YouTube-Gurus und Chart-Roulette.""
    },
    {
      title: "Die stille Community dahinter",
      content: "Inzwischen setzen über 2.000 Nutzer weltweit Bitloon ein – mit Einsätzen zwischen 100 und 10.000 Euro. Viele berichten von konstanten Ergebnissen, einem besseren Risikogefühl und – ganz wichtig – mehr Freizeit. Denn Bitloon läuft 24/7. Ohne Pause. Ohne „mal kurz schauen". Und genau das macht ihn für viele zur echten Alternative im Kryptomarkt."
    },
    {
      title: "Interesse?",
      content: "Bitloon ist aktuell nur limitiert verfügbar. Wer sich rechtzeitig informiert, kann eine Lizenz erwerben, den Bot selbst einrichten und auf dem eigenen Börsenkonto laufen lassen – komplett eigenständig, mit vollem Kapitalzugriff. Mehr Infos zu Bitloon, zur Technologie und zu den Voraussetzungen findest du unter: https://ai-bitloon.com"
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
                Aus 200 € wurden 543 € in 28 Stunden – ganz ohne Handgriff: Wie der Krypto-Bot Bitloon das Spiel am Markt neu schreibt
              </h1>

              {/* Star Rating */}
              <div className="mb-6">
                <StarRating rating={4.8} reviewCount={89} />
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-xl mb-8 font-nexa">
                <span className="font-medium">Von Jonas M.</span>
                <span>12. Juni 2025, 09:15 Uhr</span>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5" />
                  <span>6 Min. Lesezeit</span>
                </div>
              </div>
            </header>

            {/* Main image */}
            <figure className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&h=700&fit=crop" 
                alt="Bitloon Trading Bot"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <figcaption className="mt-4 text-lg text-muted-foreground leading-relaxed font-nexa">
                Der autonome Trading-Bot Bitloon revolutioniert das Krypto-Trading durch vollautomatische Handelsentscheidungen.
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
