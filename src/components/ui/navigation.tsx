import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate, Link } from 'react-router-dom';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: '/', label: 'Accueil' },
    { to: '/formation', label: 'Formation' },
    { to: '/experiences', label: 'Expériences' },
    { to: '/projets', label: 'Projets' },
    { to: '/competences', label: 'Compétences' },
    { to: '/contact', label: 'Contact' },
  ];

  const navigate = useNavigate();
  const goTo = (to: string) => {
    navigate(to);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:border-primary font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="text-lg">Menu</span>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background/95 backdrop-blur-md border-2 border-primary/20 shadow-2xl z-50">
                {navItems.map((item) => (
                  <DropdownMenuItem
                    key={item.to}
                    onClick={() => goTo(item.to)}
                    className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white font-semibold shadow-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => goTo(item.to)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;