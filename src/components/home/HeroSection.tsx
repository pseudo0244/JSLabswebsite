import { ArrowRight, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const stats = [
    { number: '5000+', label: 'Tests Conducted' },
    { number: '100%', label: 'Accuracy' },
    { number: '₹50', label: 'Starting Price' },
    { number: 'FREE', label: 'Home Collection' },
  ];

  const features = [
    'Free Home Sample Collection',
    'Tests Starting at ₹50',
    'Fast Reports',
    '100% Accuracy',
  ];

  return (
    <section className="relative bg-gradient-to-br from-sky-100 via-sky-200 to-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Accurate Diagnostics,</span>
              <br />
              <span className="text-primary">Fast Reports,</span>
              <br />
              <span className="text-success">Free Home Collection</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Serving Bengaluru with care & precision
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg shadow-large animate-slide-up"
            >
              <a href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20JS%20Labs" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <a href="https://maps.app.goo.gl/2RN89czpN1yRMeHM9" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                View Location
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;