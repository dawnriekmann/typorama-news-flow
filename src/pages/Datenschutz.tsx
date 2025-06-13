
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Datenschutz = () => {
  const breadcrumbItems = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Datenschutz'
  }];

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-nexa">
      <Header showBreadcrumb={true} breadcrumbItems={breadcrumbItems} />
      
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={handleGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Zurück zur vorherigen Seite
          </Button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-nexa">
          Datenschutzerklärung
        </h1>
        
        <div className="space-y-8 text-xl leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Verantwortliche Stelle</h2>
            <div className="space-y-2">
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="mt-4 space-y-2">
                <p>YWC GmbH</p>
                <p>Olivaer Platz 7</p>
                <p>10707 Berlin</p>
                <p>E-Mail: info@finanzratgeber.de</p>
              </div>
              <p className="mt-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Datenerfassung auf unserer Website</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Ihre Rechte</h2>
            <div className="space-y-4">
              <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
              <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Server-Log-Dateien</h2>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-4">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
