import { Shield, Clock, Home, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Home,
      title: 'Free Home Sample Collection',
      description: 'Convenient sample collection at your doorstep with trained professionals.',
      gradient: 'from-success to-success/80',
    },
    {
      icon: Award,
      title: 'Tests Starting at ₹50',
      description: 'Affordable diagnostic services without compromising on quality.',
      gradient: 'from-warning to-warning/80',
    },
    {
      icon: Clock,
      title: 'Fast Reports',
      description: 'Quick turnaround time for all test results with digital delivery.',
      gradient: 'from-primary to-primary/80',
    },
    {
      icon: Shield,
      title: 'Clean, Comfortable Lab',
      description: 'State-of-the-art facility maintaining highest hygiene standards.',
      gradient: 'from-purple-500 to-purple-400',
    },
    {
      icon: Users,
      title: '100% Accuracy',
      description: 'Precise results with advanced equipment and expert technicians.',
      gradient: 'from-emerald-500 to-emerald-400',
    },
    {
      icon: Heart,
      title: 'Caring Service',
      description: 'Compassionate healthcare with personalized attention to every patient.',
      gradient: 'from-rose-500 to-rose-400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose JS Labs?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine advanced medical technology with compassionate care to deliver 
            exceptional diagnostic services for the Bengaluru community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-soft">
            <Shield className="w-6 h-6 text-success" />
            <span className="text-foreground font-medium">
              Trusted by 5000+ patients across Bengaluru
            </span>
            <Award className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;