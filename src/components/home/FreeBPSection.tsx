import { Heart, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FreeBPSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-large border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-large">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    🎉 Special Offer: Free BP Checkup!
                  </h2>
                  <div className="bg-yellow-100 px-6 py-3 rounded-2xl inline-block">
                    <p className="text-lg font-bold text-foreground">
                      Get your Blood Pressure checked absolutely FREE!
                    </p>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Monitor your heart health with our complimentary blood pressure screening
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                  <div className="flex items-center justify-center space-x-2 bg-white/60 px-4 py-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">Quick & Painless</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 bg-white/60 px-4 py-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">No Appointment Needed</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 bg-white/60 px-4 py-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm font-medium">Instant Results</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-6 text-lg shadow-large"
                  >
                    <a 
                      href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20claim%20my%20FREE%20BP%20checkup!" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Claim Your Free BP Checkup
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  *Available during all working hours. Valid for walk-in patients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FreeBPSection;