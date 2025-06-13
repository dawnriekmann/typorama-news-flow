
import Header from '@/components/Header';

const Impressum = () => {
  const breadcrumbItems = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Impressum'
  }];

  return (
    <div className="min-h-screen bg-background text-foreground font-nexa">
      <Header showBreadcrumb={true} breadcrumbItems={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-nexa">
          Impressum
        </h1>
        
        <div className="space-y-8 text-xl leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p>YWC GmbH</p>
              <p>Olivaer Platz 7</p>
              <p>10707 Berlin</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p>E-Mail: info@finanzratgeber.de</p>
              <p>Website: https://finanzratgeber.de</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Registereintrag</h2>
            <div className="space-y-2">
              <p>Eintragung im Handelsregister</p>
              <p>Registergericht: Amtsgericht Charlottenburg (Berlin)</p>
              <p>Registernummer: HRB 216780 B</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Vertreten durch</h2>
            <p>Geschäftsführer: Jan Schiller</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
                <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
                <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
