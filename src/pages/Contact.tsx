import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/azynkyob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8088039159',
      action: 'tel:+918088039159',
      actionText: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 8088039159',
      action: 'https://wa.me/918088039159',
      actionText: 'Chat Now'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Shop No 5, Nyanapahalli Main Rd, near DLF New town, opposite to JJ ELITA apartment, Devarachikkana Halli, Bengaluru, Karnataka 560076',
      action: 'https://maps.google.com/?q=JS+Labs+Diagnostic+Center+Bengaluru',
      actionText: 'Get Directions'
    }
  ];

  const workingHours = [
    { days: 'Monday - Thursday', hours: '7:00 AM - 2:00 PM & 5:00 PM - 9:00 PM' },
    { days: 'Friday - Saturday', hours: '7:00 AM - 2:00 PM & 5:00 PM - 9:00 PM' },
    { days: 'Sunday', hours: '7:00 AM - 1:00 PM' }
  ];

  return (
    <Layout 
      title="Contact Us" 
      description="Contact JS Labs Diagnostic Center Bengaluru. Get in touch for appointments, test bookings, and inquiries. Call +91 8088039159 or visit our Nyanapahalli location."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-sky-200 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact JS Labs
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help with all your diagnostic needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    className="text-center shadow-large border-0 bg-white hover:shadow-xl transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto shadow-large group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {info.details}
                      </p>
                      <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-medium hover:shadow-large transition-all duration-300"
                      >
                        <a href={info.action} target="_blank" rel="noopener noreferrer">
                          {info.actionText}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-up">
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardTitle className="text-2xl text-foreground">
                      Send us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your phone number"
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="h-12 border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your requirements or questions"
                          rows={4}
                          className="resize-none border-2 focus:border-primary transition-colors"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white h-12 text-lg shadow-large hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <div className="text-center pt-4 border-t border-border/20">
                        <p className="text-sm text-muted-foreground mb-3">
                          Or for immediate assistance:
                        </p>
                        <Button
                          variant="outline"
                          asChild
                          className="border-2 border-success text-success hover:bg-success hover:text-white transition-colors"
                        >
                          <a href="https://wa.me/918088039159?text=Hi%2C%20I%20have%20a%20question" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp Us
                          </a>
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Working Hours */}
              <div className="space-y-6 animate-scale-in">
                {/* Map */}
                <Card className="shadow-large border-0 overflow-hidden">
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.6!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="JS Labs Location"
                    ></iframe>
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        asChild
                        className="bg-white/90 text-foreground hover:bg-white border border-border/20 shadow-medium"
                      >
                        <a href="https://maps.google.com/?q=JS+Labs+Diagnostic+Center+Bengaluru" target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-4 h-4 mr-2" />
                          View in Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Working Hours */}
                <Card className="shadow-xl border-0 bg-white">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardTitle className="flex items-center text-xl text-foreground">
                      <Clock className="w-6 h-6 mr-3 text-primary" />
                      Working Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {workingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200"
                        >
                          <span className="font-semibold text-foreground">
                            {schedule.days}
                          </span>
                          <span className="text-sm text-muted-foreground text-right font-medium">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl text-center shadow-medium">
                      <p className="text-white font-semibold">
                        <CheckCircle className="w-4 h-4 inline mr-2" />
                        Home collection available during all working hours
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;