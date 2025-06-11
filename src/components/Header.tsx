
import Header from '@/components/Header';
import StarRating from '@/components/StarRating';

interface HeaderProps {
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
  }>;
}

const Header = ({ showBreadcrumb = false, breadcrumbItems = [] }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-20 py-6">
          {/* Logo Section - Centered */}
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-finance-primary mb-2">
              FinanceToday
            </h1>
            <div className="text-lg text-muted-foreground font-light tracking-wide">
              Vertrauenswürdige Finanz-Nachrichten
            </div>
            {/* Decorative underline */}
            <div className="mt-3 w-24 h-0.5 bg-gradient-to-r from-finance-primary to-finance-secondary mx-auto rounded-full"></div>
          </div>
        </div>
        
        {/* Breadcrumb */}
        {showBreadcrumb && breadcrumbItems.length > 0 && (
          <div className="py-3 border-t border-border/50">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                  <BreadcrumbItem key={index}>
                    {index === breadcrumbItems.length - 1 ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <>
                        <BreadcrumbLink href={item.href || '#'}>
                          {item.label}
                        </BreadcrumbLink>
                        <BreadcrumbSeparator />
                      </>
                    )}
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
