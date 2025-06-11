
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ArrowLeftIcon, ClockIcon, ShareIcon } from 'lucide-react';

interface ArticleProps {
  title: string;
  content: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  publishDate: string;
  readTime: number;
  category: string;
  image: string;
  onBack: () => void;
}

const getCategoryStyle = (category: string) => {
  const styles = {
    politics: 'category-politics',
    tech: 'category-tech',
    sports: 'category-sports',
    culture: 'category-culture',
    business: 'category-business',
  };
  return styles[category as keyof typeof styles] || 'bg-gray-600 text-white';
};

const Article = ({ 
  title, 
  content, 
  author, 
  authorImage, 
  authorBio, 
  publishDate, 
  readTime, 
  category, 
  image, 
  onBack 
}: ArticleProps) => {
  const formattedContent = content.split('\n\n').map((paragraph, index) => {
    if (paragraph.startsWith('## ')) {
      return (
        <h2 key={index} className="font-serif text-2xl lg:text-3xl font-bold mt-12 mb-6 text-foreground">
          {paragraph.replace('## ', '')}
        </h2>
      );
    }
    if (paragraph.startsWith('> ')) {
      return (
        <blockquote key={index} className="pull-quote">
          {paragraph.replace('> ', '')}
        </blockquote>
      );
    }
    return (
      <p key={index} className={`text-foreground leading-relaxed mb-6 text-base lg:text-lg ${index === 0 ? 'drop-cap' : ''}`}>
        {paragraph}
      </p>
    );
  });

  return (
    <article className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container mx-auto px-4 py-4">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Zurück
        </Button>
      </div>

      {/* Hero image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Article header */}
          <div className="bg-background rounded-lg p-8 mb-8 shadow-lg">
            <Badge className={`mb-4 ${getCategoryStyle(category)}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Badge>
            
            <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6 text-fluid-4xl">
              {title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={authorImage} />
                  <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{author}</p>
                  {authorBio && <p className="text-sm text-muted-foreground">{authorBio}</p>}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{publishDate}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <ClockIcon className="w-4 h-4" />
                  <span>{readTime} Min. Lesezeit</span>
                </div>
                <Button variant="outline" size="sm">
                  <ShareIcon className="w-4 h-4 mr-2" />
                  Teilen
                </Button>
              </div>
            </div>
          </div>

          {/* Article body */}
          <div className="bg-background rounded-lg p-8 shadow-lg">
            <div className="article-content">
              {formattedContent}
            </div>
            
            <Separator className="my-8" />
            
            {/* Author info */}
            <div className="flex items-start space-x-4 p-6 bg-secondary/30 rounded-lg">
              <Avatar className="w-16 h-16">
                <AvatarImage src={authorImage} />
                <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-lg mb-1">{author}</h4>
                <p className="text-muted-foreground">
                  {authorBio || "Redakteur bei Typorama News mit Fokus auf aktuelle Ereignisse und detaillierte Berichterstattung."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
