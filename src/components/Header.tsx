
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon, SearchIcon } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface HeaderProps {
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
  }>;
}

const Header = ({ showBreadcrumb = false, breadcrumbItems = [] }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Märkte', href: '#maerkte', category: 'markets' },
    { name: 'Krypto', href: '#krypto', category: 'crypto' },
    { name: 'Aktien', href: '#aktien', category: 'stocks' },
    { name: 'Wirtschaft', href: '#wirtschaft', category: 'business' },
    { name: 'Analyse', href: '#analyse', category: 'analysis' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-serif text-2xl font-bold tracking-tight text-finance-primary">
              FinanceToday
            </h1>
            <div className="ml-3 text-xs text-muted-foreground hidden sm:block">
              Vertrauenswürdige Finanz-Nachrichten
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-finance-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-finance-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <SearchIcon className="h-4 w-4 mr-2" />
              Suchen
            </Button>
            
            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-finance-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button variant="outline" className="mt-4">
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Suchen
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
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
