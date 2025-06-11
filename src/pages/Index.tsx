
import { useState } from 'react';
import Header from '@/components/Header';
import ArticleCard from '@/components/ArticleCard';
import Article from '@/components/Article';
import { newsArticles } from '@/data/newsData';

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  
  const heroArticle = newsArticles[0];
  const featuredArticles = newsArticles.slice(1, 4);
  const additionalArticles = newsArticles.slice(4);

  const currentArticle = selectedArticle 
    ? newsArticles.find(article => article.id === selectedArticle)
    : null;

  if (currentArticle) {
    return (
      <Article
        {...currentArticle}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">
          <ArticleCard
            {...heroArticle}
            isHero
            onClick={() => setSelectedArticle(heroArticle.id)}
          />
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container mx-auto px-4 py-12">
        <div className="border-t border-border pt-12">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center">
            Aktuelle Nachrichten
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
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Typorama News</h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Premium Nachrichtenportal mit Fokus auf qualitativ hochwertigen Journalismus, 
            elegante Typography und herausragende Lesererfahrung.
          </p>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Typorama News. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
