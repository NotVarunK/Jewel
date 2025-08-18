const features = [
  {
    title: "Anti-Tarnish Technology",
    description: "Advanced coating ensures your jewelry stays brilliant for years, maintaining its original luster.",
    icon: "✨"
  },
  {
    title: "Premium Craftsmanship",
    description: "Each piece is meticulously crafted with attention to detail, combining traditional techniques with modern design.",
    icon: "💎"
  },
  {
    title: "Affordable Luxury",
    description: "High-quality jewelry from ₹199 to ₹1999, making luxury accessible to the modern generation.",
    icon: "💫"
  },
  {
    title: "Pan-India Delivery",
    description: "Fast and secure delivery across India, bringing luxury jewelry right to your doorstep.",
    icon: "🚀"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-champagne">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-luxury mb-6">
            Why Choose <span className="text-rose-gold">LUXE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another jewelry brand. We're revolutionizing how Gen-Z experiences luxury.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-background shadow-elegant hover:shadow-luxury transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-luxury text-xl font-semibold text-luxury">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;