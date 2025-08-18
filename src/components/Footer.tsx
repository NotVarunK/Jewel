const Footer = () => {
  return (
    <footer className="bg-luxury-text text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="font-luxury text-2xl font-bold tracking-wider">
              LUXE
            </div>
            <p className="text-gray-300 leading-relaxed">
              Timeless elegance meets modern innovation. 
              Anti-tarnish jewelry crafted for the next generation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-rose-gold rounded-full flex items-center justify-center hover:bg-rose-gold-light transition-colors">
                <span className="text-white text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-rose-gold rounded-full flex items-center justify-center hover:bg-rose-gold-light transition-colors">
                <span className="text-white text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-rose-gold rounded-full flex items-center justify-center hover:bg-rose-gold-light transition-colors">
                <span className="text-white text-sm">TW</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rose-gold transition-colors">Rings</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Bracelets</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Sets</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Care</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rose-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-rose-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Stay Connected</h4>
            <p className="text-gray-300 text-sm">
              Subscribe for exclusive offers and new collection updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-rose-gold"
              />
              <button className="px-6 py-2 bg-rose-gold hover:bg-rose-gold-light transition-colors rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;