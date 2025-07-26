import { ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import StarRating from '@/components/StarRating';
import TradingBotTestimonials from '@/components/TradingBotTestimonials';
const Festgeld = () => {
  const breadcrumbItems = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Festgeld',
    href: '#festgeld'
  }, {
    label: 'Artikel'
  }];

  // Get today's date dynamically
  const today = new Date();
  const formattedDate = today.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const articleSections = [{
    title: "Ein exklusives Zinsangebot übertrifft gerade alle Erwartungen",
    content: "München-Sendling, Donnerstagvormittag. Daniela R. ist keine Finanzprofi, keine Aktionärin, keine Traderin. Sie ist 54, Buchhalterin, und legt seit Jahren jeden Euro zurück, der übrig bleibt. \"Früher hab ich das einfach auf dem Sparkonto liegen lassen – 0,25 %. Wenn überhaupt. Ich dachte: Lieber sicher als riskant.\" Bis ein Kollege ihr einen Link schickte. Braun Investments. 4,1 % Zinsen – garantiert für 12 Monate. Kein Girokonto nötig. Keine Kleingedruckte Fallen. \"Ich hab erst gedacht: Das ist zu gut, um wahr zu sein\", sagt sie heute – mit einem anderen Blick aufs Sparen."
  }, {
    title: "Rechnen statt resignieren: Zinsen sind zurück",
    content: "Seit Jahren liegt die Realverzinsung bei klassischen Sparkonten unter der Inflationsrate. Viele haben sich daran gewöhnt. Daniela nicht. Sie klickte sich durch das Angebot auf der Vergleichsseite von Braun Investments – einem unabhängigen Vermittler, der Konditionen verhandelt, die man bei Banken direkt oft nicht bekommt. \"Was mich überzeugt hat? Dass ich kein neues Girokonto brauchte. Ich wollte nicht mein ganzes Banking umstellen – nur einen Teil besser anlegen.\" Also legte sie 20.000 Euro für ein Jahr fest. 4,1 % garantierte Zinsen – das ergibt 820 Euro Rendite. Ohne Risiko, ohne Schwankungen. Einfach berechenbar."
  }, {
    title: "Der Anbieter: Braun Investments",
    content: "Braun Investments ist kein Bankhaus – sondern ein spezialisierter Finanzdienstleister mit Fokus auf sichere, renditestarke Anlagen. Die Zinsen stammen von der Santander Bank, die Konten werden dort geführt – aber der Zugang ist exklusiv über Braun. Warum? \"Wir haben ein Sonderkontingent verhandelt, das nur für unsere Kunden zugänglich ist\", erklärt Sebastian Gerber, Senior-Berater für Festgeldstrategien. Tagesgeld mit 3,2 % p.a. gibt's ebenfalls – für alle, die flexibel bleiben wollen. Und das Beste: Alles ist 100 % gesetzlich abgesichert, bis 100.000 € pro Kunde – wie bei jedem deutschen Bankinstitut."
  }, {
    title: "Kein Berater-Termin. Kein Papierkram. Kein Risiko.",
    content: "\"Ich hab alles online gemacht\", sagt Daniela. \"Formular ausfüllen, Verifizierung per App, Kontoeröffnung. Kein langes Warten, keine Unterschriften-Post.\" Was sie besonders beruhigte: Es gab keine versteckten Gebühren. Keine \"Kontoführungsentgelte\". Und keinen Zwang, irgendetwas anderes abzuschließen. \"Ich war überrascht, wie einfach das ging. Und ich frage mich heute: Warum hab ich das nicht schon vor drei Jahren gemacht?\""
  }, {
    title: "Jetzt oder nie: Das Kontingent ist begrenzt",
    content: "Die Nachfrage ist hoch. Laut Braun Investments sei bereits ein Großteil der Festgeldplätze vergeben. Sobald das Sonderkontingent ausgeschöpft ist, wird das Angebot gestoppt. \"Wir bekommen jeden Tag Anfragen\", so Gerber. \"Und wir merken: Die Leute haben genug von Nullzinsen. Sie wollen etwas, das sich wirklich lohnt – aber sicher ist.\" Daniela R. hat sich ihren Platz gesichert. Und wenn sie ehrlich ist: \"Es fühlt sich gut an, mal nicht abzuwarten – sondern zu handeln. Endlich bekomme ich etwas für mein Erspartes.\""
  }, {
    title: "Interesse?",
    content: "Das exklusive Festgeld- und Tagesgeldangebot ist nur über Braun Investments zugänglich. Keine Bankberatung, keine Umwege – direkt, digital, sicher. Jetzt informieren unter: https://braun-investments.de/finanzen/santander-bank"
  }];
  return <div className="min-h-screen bg-background text-foreground font-nexa">
      <Header showBreadcrumb={true} breadcrumbItems={breadcrumbItems} />
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Article */}
          <div className="lg:col-span-2">
            {/* Article header */}
            <header className="mb-10">
              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground font-nexa">So sicherte sich Daniela R. 4,1 % Zinsen für 12 Monate</h1>

              {/* Star Rating */}
              <div className="mb-6">
                <StarRating rating={4.8} reviewCount={89} />
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-2xl mb-8 font-nexa">
                <span>{formattedDate}</span>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-6 h-6" />
                  <span>6 Min. Lesezeit</span>
                </div>
              </div>
            </header>

            {/* Main image */}
            <figure className="mb-12">
              <img alt="Braun Investments Festgeld-Spezial" className="w-full h-auto rounded-lg shadow-lg" src="/lovable-uploads/0e4fdd1e-ed96-4b57-8f09-0b039173bd10.png" />
              <figcaption className="mt-4 text-xl text-muted-foreground leading-relaxed font-nexa">Exklusiv: 4,1% Festgeld & 3,2% Tagesgeld bei Santander Bank</figcaption>
            </figure>

            {/* Article content */}
            <article className="max-w-none">
              {articleSections.map((section, index) => <section key={index} className="mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight font-nexa">
                    {section.title}
                  </h2>
                  <p className="text-2xl leading-relaxed text-foreground mb-6 font-light font-nexa">
                    {section.content}
                  </p>
                </section>)}
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
              <Link to="/impressum" className="hover:text-finance-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-finance-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Festgeld;