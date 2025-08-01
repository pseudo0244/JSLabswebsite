import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kartik Sumbly',
      review: 'Took my parents here, they were very comfortable. The staff was professional and caring.',
      rating: 5,
    },
    {
      name: 'Sanketh 90',
      review: 'Clean place and quick process. Liked it. Reports were delivered on time as promised.',
      rating: 5,
    },
    {
      name: 'Vishwanath Setty',
      review: 'Got the job done on time and best price. Excellent service and accurate results.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from real people who trust JS Labs for their diagnostic needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-warning text-warning"
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verified Patient
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-warning text-warning"
                />
              ))}
            </div>
            <span className="text-foreground font-medium ml-2">
              5.0 Average Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;