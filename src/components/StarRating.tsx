
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  reviewCount?: number;
}

const StarRating = ({ rating, maxRating = 5, reviewCount }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-gray-300" />
            <Star 
              className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute top-0 left-0"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
            />
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
      
      <span className="text-sm text-muted-foreground">
        {rating.toFixed(1)}/5
        {reviewCount && (
          <span className="ml-1">
            (basierend auf {reviewCount} Expertenbewertungen)
          </span>
        )}
      </span>
    </div>
  );
};

export default StarRating;
