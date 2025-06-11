
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ClockIcon, ShareIcon } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  authorImage?: string;
  publishDate: string;
  readTime: number;
  category: string;
  image: string;
  isHero?: boolean;
  onClick?: () => void;
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

const ArticleCard = ({ 
  title, 
  excerpt, 
  author, 
  authorImage, 
  publishDate, 
  readTime, 
  category, 
  image, 
  isHero = false,
  onClick 
}: ArticleCardProps) => {
  if (isHero) {
    return (
      <div 
        className="relative h-[70vh] overflow-hidden rounded-lg cursor-pointer group"
        onClick={onClick}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <Badge className={`mb-4 ${getCategoryStyle(category)}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
          <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 text-fluid-4xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl text-fluid-lg">
            {excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={authorImage} />
                <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{author}</span>
            </div>
            <span>•</span>
            <span>{publishDate}</span>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-4 h-4" />
              <span>{readTime} Min. Lesezeit</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card 
      className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300 border-0 bg-card"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className={`absolute top-3 left-3 ${getCategoryStyle(category)}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors text-fluid-xl">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-fluid-base leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={authorImage} />
              <AvatarFallback className="text-xs">{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span>{publishDate}</span>
            <div className="flex items-center space-x-1">
              <ClockIcon className="w-3 h-3" />
              <span>{readTime}m</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
