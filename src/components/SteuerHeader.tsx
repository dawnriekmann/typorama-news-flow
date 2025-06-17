
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';

interface HeaderProps {
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
  }>;
}

const SteuerHeader = ({ showBreadcrumb = false, breadcrumbItems = [] }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-32 py-12">
          {/* Logo Section - Centered */}
          <div className="text-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Handelsblatt_201x_logo.svg/2560px-Handelsblatt_201x_logo.svg.png" 
              alt="Handelsblatt" 
              className="h-12 md:h-16 mx-auto mb-2"
            />
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

export default SteuerHeader;
