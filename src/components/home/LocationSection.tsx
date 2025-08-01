import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Modern Facility
            </h2>
            <p className="text-xl text-muted-foreground">
              Conveniently located in Bengaluru with easy access and parking
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Location Info */}
            <div className="space-y-8 animate-slide-up">
              <Card className="shadow-medium border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span>Our Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    <strong className="text-foreground">JS Labs Diagnostic Center</strong><br />
                    Shop No 5, Nyanapahalli Main Rd,<br />
                    near DLF New town,<br />
                    opposite to JJ ELITA apartment,<br />
                    Devarachikkana Halli,<br />
                    Bengaluru, Karnataka 560076
                  </address>
                  
                  <div className="flex items-center space-x-3 pt-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <a 
                      href="tel:+918088039159" 
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      +91 8088039159
                    </a>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-6">
                    <Button
                      asChild
                      className="bg-gradient-primary hover:opacity-90 flex-1"
                    >
                      <a href="https://maps.app.goo.gl/2RN89czpN1yRMeHM9" target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                    >
                      <a href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20visit%20JS%20Labs" target="_blank" rel="noopener noreferrer">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;