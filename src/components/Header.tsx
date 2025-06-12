import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';

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
        <div className="flex items-center justify-center h-24 py-8">
          {/* Logo Section - Centered */}
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-finance-primary mb-2">
              FinanceToday
            </h1>
            <div className="text-lg text-muted-foreground font-light tracking-wide">
              Vertrauenswürdige Finanz-Nachrichten
            </div>
            {/* Decorative underline */}
            <div className="mt-3 w-24 h-0.5 bg-gradient-to-r from-finance-primary to-finance-secondary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
