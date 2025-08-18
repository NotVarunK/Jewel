import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-luxury text-2xl font-bold text-luxury tracking-wider">
          LUXE
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium text-luxury hover:text-rose-gold transition-colors">
            RINGS
          </a>
          <a href="#" className="text-sm font-medium text-luxury hover:text-rose-gold transition-colors">
            NECKLACES
          </a>
          <a href="#" className="text-sm font-medium text-luxury hover:text-rose-gold transition-colors">
            EARRINGS
          </a>
          <a href="#" className="text-sm font-medium text-luxury hover:text-rose-gold transition-colors">
            BRACELETS
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-luxury hover:text-rose-gold">
            SEARCH
          </Button>
          <Button variant="luxury" size="sm">
            CART
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;