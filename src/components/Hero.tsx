import { Button } from "@/components/ui/button";
import heroRing from "@/assets/hero-ring.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-champagne overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="font-luxury text-5xl md:text-7xl font-bold text-luxury leading-tight">
              Timeless
              <br />
              <span className="text-rose-gold">Elegance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Discover our curated collection of anti-tarnish jewelry. 
              From ₹199 to ₹1999 - luxury that lasts, crafted for the modern generation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="luxury" size="lg" className="font-semibold">
              SHOP COLLECTION
            </Button>
            <Button variant="outline" size="lg" className="font-semibold border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white">
              EXPLORE RINGS
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
              <span>Anti-Tarnish Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
              <span>Pan-India Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-rose-gold rounded-full"></div>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 shadow-luxury rounded-2xl overflow-hidden">
            <img 
              src={heroRing} 
              alt="Luxury anti-tarnish ring" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;