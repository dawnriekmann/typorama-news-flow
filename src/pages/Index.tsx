import { useState } from 'react';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import BitcoinArticle from '@/components/BitcoinArticle';
import { newsArticles } from '@/data/newsData';

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [showBitcoinArticle, setShowBitcoinArticle] = useState(false);
  
  const heroArticle = newsArticles[0];
  const featuredArticles = newsArticles.slice(1, 4);
  const additionalArticles = newsArticles.slice(4);

  // Show Bitcoin article
  if (showBitcoinArticle) {
    return (
      <BitcoinArticle onBack={() => setShowBitcoinArticle(false)} />
    );
  }

  // Show regular article
  if (selectedArticle) {
    const currentArticle = newsArticles.find(article => article.id === selectedArticle);
    if (currentArticle) {
      return (
        <Article
          {...currentArticle}
          onBack={() => setSelectedArticle(null)}
        />
      );
    }
  }

  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Krypto', href: '#krypto' },
    { label: 'Artikel' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showBreadcrumb={true} breadcrumbItems={breadcrumbItems} />
      
      {/* Featured Bitcoin Article */}
      <section className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <div className="relative h-[70vh] overflow-hidden rounded-lg cursor-pointer group"
               onClick={() => setShowBitcoinArticle(true)}>
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop" 
              alt="Bitcoin ETF News"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="inline-block px-3 py-1 bg-finance-primary text-white text-sm font-semibold rounded-full mb-4">
                KRYPTO
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
                Bitcoin ETF Zulassung: Institutioneller Durchbruch für Kryptowährungen
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
                Die SEC hat endlich Bitcoin ETFs zugelassen - ein historischer Moment für institutionelle Krypto-Investments
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span className="font-medium">Dr. Sarah Müller</span>
                <span>•</span>
                <span>15. Januar 2025</span>
                <span>•</span>
                <span>8 Min. Lesezeit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4 py-12">
        <div className="border-t border-border pt-12">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Weitere Finanznachrichten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ArticleCard
                  {...article}
                  onClick={() => setSelectedArticle(article.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Articles */}
      {additionalArticles.length > 0 && (
        <section className="container mx-auto px-4 py-12 bg-secondary/20">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Weitere Artikel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {additionalArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ArticleCard
                  {...article}
                  onClick={() => setSelectedArticle(article.id)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-finance-primary text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">FinanceToday</h3>
              <p className="text-blue-100 mb-4">
                Seriöser Finanz-Journalismus mit höchsten redaktionellen Standards. 
                Vertrauenswürdige Nachrichten für informierte Anlageentscheidungen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Redaktionsrichtlinien</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Standards</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Redaktionelle Ethik</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fact-Checking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quellenrichtlinien</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Beschwerden</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Über uns</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors">Das Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mediadaten</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerschaften</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-400 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 FinanceToday. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <span>🔒 SSL-gesichert</span>
              <span>📋 BaFin-konform</span>
              <span>✓ DSGVO-konform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Keep existing Article import
import Article from '@/components/Article';

export default Index;
