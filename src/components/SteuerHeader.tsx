
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SteuerHeaderProps {
  showBreadcrumb?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
}

const SteuerHeader = ({ showBreadcrumb = false, breadcrumbItems = [] }: SteuerHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Aktien', href: '#aktien' },
    { label: 'Krypto', href: '#krypto' },
    { label: 'ETFs', href: '#etfs' },
    { label: 'Immobilien', href: '#immobilien' },
    { label: 'Sparen', href: '#sparen' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-finance-primary">
                FinanceToday
              </h1>
              <div className="text-xs text-muted-foreground font-light tracking-wide">
                Vertrauenswürdige Finanz-Nachrichten
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-finance-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="sm">
                        <X className="h-5 w-5" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <nav className="space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block text-base font-medium text-muted-foreground hover:text-finance-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        {showBreadcrumb && breadcrumbItems.length > 0 && (
          <div className="pb-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">/</span>}
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="hover:text-finance-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-foreground font-medium">{item.label}</span>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SteuerHeader;
