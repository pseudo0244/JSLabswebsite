import Layout from '@/components/layout/Layout';
import { Shield, Lock, Eye, Users, Database, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information (name, phone number, email, address)',
        'Medical information related to diagnostic tests',
        'Payment information for billing purposes',
        'Website usage data and cookies for improved service'
      ]
    },
    {
      icon: Shield,
      title: 'How We Protect Your Data',
      content: [
        'All personal and medical data is stored securely with encryption',
        'Access to patient information is restricted to authorized personnel only',
        'We maintain physical and digital security measures',
        'Regular security audits and updates to our systems'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide diagnostic services and deliver test results',
        'To communicate about appointments and follow-up care',
        'To process payments and maintain billing records',
        'To improve our services and patient experience'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We never sell or share your personal data with third parties',
        'Medical information is only shared with your consent',
        'We may share data with healthcare providers as required for care',
        'Legal compliance may require disclosure in specific circumstances'
      ]
    },
    {
      icon: Lock,
      title: 'Data Retention',
      content: [
        'Medical records are retained as per regulatory requirements',
        'Personal information is kept only as long as necessary',
        'You can request deletion of your data (subject to legal requirements)',
        'Automatic deletion of old records after specified periods'
      ]
    },
    {
      icon: Phone,
      title: 'Third-Party Services',
      content: [
        'WhatsApp interactions are subject to WhatsApp\'s privacy policy',
        'Google Maps integration for location services',
        'Getform.io for contact form submissions (encrypted)',
        'Payment processors for secure transaction handling'
      ]
    }
  ];

  return (
    <Layout 
      title="Privacy Policy" 
      description="JS Labs Privacy Policy - How we protect your personal and medical information. Secure data handling, patient confidentiality, and HIPAA compliance at our diagnostic center."
    >
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priorities
            </p>
            <div className="flex items-center justify-center space-x-2 pt-4">
              <Shield className="w-6 h-6 text-success" />
              <span className="text-foreground font-medium">
                Last updated: January 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large border-0 bg-gradient-card animate-fade-in">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At JS Labs Diagnostic Center, we are committed to protecting your privacy and 
                    maintaining the confidentiality of your personal and medical information. This 
                    privacy policy explains how we collect, use, and protect your information when 
                    you use our services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We understand the sensitive nature of medical information and adhere to the 
                    highest standards of data protection and patient confidentiality. Your trust 
                    is paramount to us, and we are committed to maintaining it through transparent 
                    and secure data handling practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 bg-gradient-to-br from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card
                  key={index}
                  className="shadow-medium border-0 bg-white/90 backdrop-blur-sm animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4 text-xl text-foreground">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-medium">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span>{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start space-x-3 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">You have the right to:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-success">✓</span>
                        <span>Access your personal and medical information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-success">✓</span>
                        <span>Request corrections to inaccurate information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-success">✓</span>
                        <span>Request deletion of your data (subject to legal requirements)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-success">✓</span>
                        <span>Receive a copy of your medical records</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Cookies and Tracking:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>We use essential cookies for website functionality</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>Analytics cookies help us improve our services</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>You can manage cookie preferences in your browser</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">•</span>
                        <span>No personal medical data is tracked via cookies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              We're here to address any concerns about your data privacy and security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://wa.me/918088039159?text=Hi%2C%20I%20have%20questions%20about%20privacy%20policy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Privacy Officer
              </a>
              <a
                href="tel:+918088039159"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Call +91 8088039159
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 pt-4">
              Our privacy officer is available during business hours to address your concerns
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;