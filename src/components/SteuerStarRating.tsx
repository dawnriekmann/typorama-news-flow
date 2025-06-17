
import { Star } from 'lucide-react';

interface SteuerStarRatingProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

const SteuerStarRating = ({ rating, reviewCount, className = "" }: SteuerStarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-1">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star
            key={`full-${index}`}
            className="w-6 h-6 fill-yellow-400 text-yellow-400"
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-6 h-6 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star
            key={`empty-${index}`}
            className="w-6 h-6 text-gray-300"
          />
        ))}
      </div>
      
      <div className="flex items-center gap-2 text-lg font-nexa">
        <span className="font-bold text-foreground">{rating.toFixed(1)}</span>
        {reviewCount && (
          <span className="text-muted-foreground">
            ({reviewCount} Bewertungen)
          </span>
        )}
      </div>
    </div>
  );
};

export default SteuerStarRating;
