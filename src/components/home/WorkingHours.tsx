import { Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorkingHours = () => {
  const schedule = [
    {
      days: 'Monday - Thursday',
      morning: '7:00 AM - 2:00 PM',
      evening: '5:00 PM - 9:00 PM',
    },
    {
      days: 'Friday - Saturday',
      morning: '7:00 AM - 2:00 PM',
      evening: '5:00 PM - 9:00 PM',
    },
    {
      days: 'Sunday',
      morning: '7:00 AM - 1:00 PM',
      evening: 'Closed',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Working Hours
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here when you need us most
            </p>
          </div>

          <Card className="shadow-large border-0 bg-gradient-card animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl">
                <Clock className="w-8 h-8 text-primary" />
                <span>Operating Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {schedule.map((slot, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/80 rounded-xl border border-border/50 hover:shadow-medium transition-shadow"
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-foreground">
                        {slot.days}
                      </h3>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Morning</p>
                        <p className="font-medium text-foreground">{slot.morning}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Evening</p>
                        <p className="font-medium text-foreground">{slot.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-center">
                <p className="text-primary-foreground font-medium">
                  Need urgent testing? Call us at{' '}
                  <a 
                    href="tel:+918088039159" 
                    className="font-bold underline hover:no-underline"
                  >
                    +91 8088039159
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkingHours;