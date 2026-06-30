"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  Moon, 
  Sun, 
  Menu, 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Shield,
  FileText,
  Phone,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      title: 'For Suppliers',
      href: '/for-suppliers',
      description: 'Join our network of verified suppliers',
      icon: Package,
      items: [
        { title: 'Supplier Registration', href: '/supplier/register', description: 'Start selling on Toreso' },
        { title: 'Supplier Benefits', href: '/for-suppliers#benefits', description: 'Why choose Toreso' },
        { title: 'Success Stories', href: '/for-suppliers#success', description: 'Real supplier testimonials' },
        { title: 'Pricing', href: '/for-suppliers#pricing', description: 'Transparent fee structure' },
      ]
    },
    {
      title: 'For Buyers',
      href: '/for-buyers',
      description: 'Streamline your procurement process',
      icon: ShoppingCart,
      items: [
        { title: 'Buyer Registration', href: '/buyer/register', description: 'Start procuring smarter' },
        { title: 'Buyer Benefits', href: '/for-buyers#benefits', description: 'Cost savings & efficiency' },
        { title: 'Request Demo', href: '/request-demo', description: 'See Toreso in action' },
        { title: 'Case Studies', href: '/for-buyers#cases', description: 'Real buyer success stories' },
      ]
    },
    {
      title: 'Categories',
      href: '/categories',
      description: 'Browse packaging materials',
      icon: Users,
      items: [
        { title: 'Corrugated Boxes', href: '/categories/corrugated-boxes', description: 'Custom and standard boxes' },
        { title: 'Flexible Packaging', href: '/categories/flexible-packaging', description: 'Pouches, films & wraps' },
        { title: 'Rigid Packaging', href: '/categories/rigid-packaging', description: 'Bottles, containers & jars' },
        { title: 'Labels & Tapes', href: '/categories/labels-tapes', description: 'Adhesive solutions' },
      ]
    },
    {
      title: 'Solutions',
      href: '/solutions',
      description: 'Comprehensive B2B solutions',
      icon: TrendingUp,
      items: [
        { title: 'Bulk Ordering', href: '/solutions/bulk-ordering', description: 'Volume discounts & savings' },
        { title: 'Quality Assurance', href: '/solutions/quality-assurance', description: 'Certified suppliers only' },
        { title: 'Supply Chain Management', href: '/solutions/supply-chain', description: 'End-to-end visibility' },
        { title: 'Invoice Discounting', href: '/solutions/invoice-discounting', description: 'Improved cash flow' },
      ]
    }
  ];

  if (!mounted) return null;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">Toreso</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium leading-none mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="grid gap-2">
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <Link
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="text-xs leading-snug text-muted-foreground">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              
              {/* Simple Navigation Items */}
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Info className="w-4 h-4 mr-2" />
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <FileText className="w-4 h-4 mr-2" />
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold gradient-text">Toreso</span>
                  </Link>
                  
                  {navigation.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <Link 
                        href={item.href}
                        className="flex items-center space-x-2 text-sm font-medium py-2"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                      <div className="ml-6 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-sm text-muted-foreground py-1 hover:text-foreground"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 space-y-2">
                    <Link href="/about" className="flex items-center space-x-2 text-sm font-medium py-2">
                      <Info className="w-4 h-4" />
                      <span>About</span>
                    </Link>
                    <Link href="/resources" className="flex items-center space-x-2 text-sm font-medium py-2">
                      <FileText className="w-4 h-4" />
                      <span>Resources</span>
                    </Link>
                    <Link href="/contact" className="flex items-center space-x-2 text-sm font-medium py-2">
                      <Phone className="w-4 h-4" />
                      <span>Contact</span>
                    </Link>
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/register">Get Started</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

