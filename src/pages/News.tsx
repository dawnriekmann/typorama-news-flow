
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
      content: "Hamburg-Altona, Dienstagmorgen. Draußen Nieselregen, drinnen flackern leuchtende Kursbewegungen über sechs Monitore. <strong>Jonas M.</strong> sitzt entspannt vor seiner Trading-Umgebung.<br/><br/>\"Ich analysiere hier nichts mehr selbst\", sagt er mit einem leichten Grinsen. \"Das übernimmt längst <strong>Bitloon</strong>.\"<br/><br/>Was klingt wie Zukunftsmusik, ist für Jonas Alltag: Ein <strong>vollautomatischer Krypto-Trading-Bot</strong>, der eigenständig handelt, auswertet und Gewinne realisiert – <strong>rund um die Uhr</strong>."
    },
    {
      title: "Vom Excel-Angestellten zum Architekten eines autonomen Systems",
      content: "Vor drei Jahren noch arbeitete Jonas in einem Großkonzern – lange Meetings, starre Abläufe. In seiner Freizeit begann er, sich intensiv mit dem Kryptomarkt und maschinellem Lernen zu beschäftigen.<br/><br/>Was ihn faszinierte: <strong>die Unberechenbarkeit menschlichen Verhaltens</strong> – und die <strong>Vorhersagbarkeit von Mustern dahinter</strong>.<br/><br/>\"Irgendwann wurde mir klar, dass ich nicht selbst besser werden musste – ich musste einen bauen, der automatisch besser handelt als ich.\" Die Idee zu <strong>Bitloon</strong> war geboren."
    },
    {
      title: "Der Bot: Bitloon",
      content: "<strong>Bitloon</strong> ist ein autonomer Trading-Bot, speziell für den hochvolatilen Kryptomarkt entwickelt. Anders als Signal-Dienste oder halbautomatische Tools handelt Bitloon <strong>vollständig selbstständig</strong> – ohne menschliche Bestätigung oder manuelle Eingriffe.<br/><br/><strong>Was Bitloon auswertet:</strong><br/>• Kursbewegungen in Echtzeit auf Plattformen wie <strong>Binance, Coinbase, Kraken</strong><br/>• Wallet-Aktivitäten großer Marktteilnehmer (sog. \"<strong>Whales</strong>\") direkt aus der Blockchain<br/>• Marktstimmungen aus <strong>Krypto-Twitter, Telegram-Gruppen</strong> und Newsfeeds<br/>• <strong>On-Chain-Daten</strong>: Liquidität, Volumen, Transaktionshäufungen<br/>• Korrelationen und Volatilitätszonen zwischen <strong>BTC, ETH, SOL</strong>, uvm.<br/><br/>\"<strong>Der Bot sucht nicht nach Trends – er rechnet Wahrscheinlichkeiten.</strong> Und handelt dann schneller als jeder Mensch reagieren könnte\", erklärt Jonas."
    },
    {
      title: "Der Praxistest: 200 € Start – 543 € Ergebnis",
      content: "Wir wollten es wissen: Funktioniert <strong>Bitloon</strong> wirklich?<br/><br/><strong>Die Testbedingungen:</strong><br/>Jonas richtet gemeinsam mit uns ein Testkonto bei einem regulierten Krypto-Broker ein. Startkapital: <strong>200 €</strong>. Bitloon wird aktiviert, im konservativen Modus (geringes Risiko, harte Stop-Loss-Grenzen). Überwachungszeitraum: <strong>28 Stunden</strong> – keine manuellen Eingriffe, keine Anpassungen.<br/><br/><strong>Das Ergebnis:</strong><br/><strong>543 € Kontostand</strong> nach Ablauf der Testphase. Bitloon führte über <strong>60 Einzel-Trades</strong> aus – größtenteils kleine Profite, aber mit hoher Trefferquote und fast ohne Drawdown.<br/><br/>\"Das System ist nicht spektakulär\", sagt Jonas. \"Aber es ist <strong>strukturiert</strong>. Und es macht <strong>keine emotionalen Fehler</strong>.\""
    },
    {
      title: "Kein Bauchgefühl. Kein Chart-Gefluche. Nur Wahrscheinlichkeiten.",
      content: "Jonas betont: <strong>Bitloon ersetzt nicht den Verstand – aber er ersetzt die Emotion.</strong><br/><br/>Wo viele Hobby-Trader bei jedem Dip nervös werden, bleibt Bitloon stoisch. Reagiert nur auf Daten. Und genau das scheint den Unterschied zu machen.<br/><br/>\"Ich verspreche niemandem Reichtum. Aber ich zeige, dass es eine Alternative gibt zu <strong>Panik, YouTube-Gurus und Chart-Roulette</strong>.\""
    },
    {
      title: "Die stille Community dahinter",
      content: "Inzwischen setzen über <strong>2.000 Nutzer weltweit</strong> Bitloon ein – mit Einsätzen zwischen <strong>100 und 10.000 Euro</strong>.<br/><br/>Viele berichten von konstanten Ergebnissen, einem besseren Risikogefühl und – ganz wichtig – <strong>mehr Freizeit</strong>.<br/><br/>Denn Bitloon läuft <strong>24/7</strong>. Ohne Pause. Ohne \"mal kurz schauen\". Und genau das macht ihn für viele zur echten Alternative im Kryptomarkt."
    },
    {
      title: "Interesse?",
      content: "<strong>Bitloon ist aktuell nur limitiert verfügbar.</strong><br/><br/>Wer sich rechtzeitig informiert, kann eine Lizenz erwerben, den Bot selbst einrichten und auf dem eigenen Börsenkonto laufen lassen – <strong>komplett eigenständig, mit vollem Kapitalzugriff</strong>.<br/><br/>Mehr Infos zu Bitloon, zur Technologie und zu den Voraussetzungen findest du unter:<br/><strong>https://ai-bitloon.com</strong>"
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground font-nexa">
                Aus 200 € wurden 543 € in 28 Stunden – ganz ohne Handgriff: Wie der Krypto-Bot Bitloon das Spiel am Markt neu schreibt
              </h1>

              {/* Star Rating */}
              <div className="mb-6">
                <StarRating rating={4.8} reviewCount={89} />
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-2xl mb-8 font-nexa">
                <span className="font-medium">Von Jonas M.</span>
                <span>12. Juni 2025, 09:15 Uhr</span>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-6 h-6" />
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
              <figcaption className="mt-4 text-xl text-muted-foreground leading-relaxed font-nexa">
                Der autonome Trading-Bot Bitloon revolutioniert das Krypto-Trading durch vollautomatische Handelsentscheidungen.
              </figcaption>
            </figure>

            {/* Article content */}
            <article className="max-w-none">
              {articleSections.map((section, index) => (
                <section key={index} className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight font-nexa">
                    {section.title}
                  </h2>
                  <div 
                    className="text-2xl leading-relaxed text-foreground mb-6 font-light font-nexa"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
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
