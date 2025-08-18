import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import stackingRings from "@/assets/stacking-rings.jpg";
import chainNecklace from "@/assets/chain-necklace.jpg";
import jewelryCollection from "@/assets/jewelry-collection.jpg";

const products = [
  {
    id: 1,
    name: "Rose Gold Stacking Rings",
    price: "₹599",
    originalPrice: "₹899",
    image: stackingRings,
    category: "Rings"
  },
  {
    id: 2,
    name: "Delicate Chain Necklace",
    price: "₹799",
    originalPrice: "₹1199",
    image: chainNecklace,
    category: "Necklaces"
  },
  {
    id: 3,
    name: "Luxury Collection Set",
    price: "₹1599",
    originalPrice: "₹1999",
    image: jewelryCollection,
    category: "Sets"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-luxury mb-6">
            Curated for <span className="text-rose-gold">You</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every piece tells a story. Discover jewelry that complements your style, 
            built to last with our anti-tarnish technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-luxury-accent hover:shadow-luxury transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-rose-gold font-medium">{product.category}</p>
                  <h3 className="font-luxury text-xl font-semibold text-luxury">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-luxury">{product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                
                <Button variant="luxury" className="w-full font-semibold">
                  ADD TO CART
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="font-semibold border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white">
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;