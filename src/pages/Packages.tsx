import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Package, Star, MessageCircle, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Packages = () => {
  const [expandedPackages, setExpandedPackages] = useState<string[]>([]);

  const togglePackage = (packageId: string) => {
    setExpandedPackages(prev =>
      prev.includes(packageId)
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  const healthPackages = [
    {
      id: 'master',
      name: 'Master Health Checkup',
      description: 'Comprehensive health screening for overall wellness assessment',
      badge: 'Most Popular',
      badgeColor: 'bg-warning text-warning-foreground',
      tests: [
        'CBC (Complete Blood Count)',
        'FBS (Fasting Blood Sugar)',
        'PPBS (Post Prandial Blood Sugar)',
        'Urea',
        'Creatinine',
        'LFT (Liver Function Test)',
        'Lipid Profile',
        'TFT (Thyroid Function Test)',
        'Urine Routine',
        'Blood Group'
      ],
      highlights: ['10+ Essential Tests', 'Full Body Checkup', 'Same Day Results']
    },
    {
      id: 'arthritis',
      name: 'Arthritis Profile',
      description: 'Specialized testing for joint health and arthritis diagnosis',
      tests: [
        'CBC (Complete Blood Count)',
        'ESR (Erythrocyte Sedimentation Rate)',
        'Uric Acid',
        'RA Factor (Rheumatoid Arthritis)',
        'ASLO (Antistreptolysin O)',
        'CRP (C-Reactive Protein)',
        'ANA (Antinuclear Antibodies)'
      ],
      highlights: ['Joint Health Focus', 'Inflammation Markers', 'Expert Analysis']
    },
    {
      id: 'coagulation',
      name: 'Coagulation Profile',
      description: 'Blood clotting function assessment and bleeding disorders',
      tests: [
        'CBC (Complete Blood Count)',
        'BTCT (Bleeding Time & Clotting Time)',
        'PT (Prothrombin Time)',
        'PTT (Partial Thromboplastin Time)',
        'Fibrinogen'
      ],
      highlights: ['Blood Clotting Tests', 'Pre-Surgery Essential', 'Quick Results']
    },
    {
      id: 'antenatal',
      name: 'Antenatal Profile',
      description: 'Essential pregnancy screening for mother and baby health',
      badge: 'Pregnancy Care',
      badgeColor: 'bg-pink-500 text-white',
      tests: [
        'HB (Hemoglobin)',
        'Blood Grouping & Rh Factor',
        'RBS (Random Blood Sugar)',
        'VDRL (Syphilis Test)',
        'HIV Screening',
        'HBSAG (Hepatitis B)',
        'TSH (Thyroid Stimulating Hormone)',
        'Urine Routine'
      ],
      highlights: ['Pregnancy Safety', 'Infection Screening', 'Baby Health']
    },
    {
      id: 'antenatal1',
      name: 'Antenatal Profile 1',
      description: 'Extended pregnancy screening with additional thyroid tests',
      tests: [
        'HB (Hemoglobin)',
        'Blood Grouping & Rh Factor',
        'RBS (Random Blood Sugar)',
        'VDRL (Syphilis Test)',
        'HIV Screening',
        'HBSAG (Hepatitis B)',
        'T3 (Triiodothyronine)',
        'T4 (Thyroxine)',
        'TSH (Thyroid Stimulating Hormone)'
      ],
      highlights: ['Enhanced Screening', 'Complete Thyroid Panel', 'Comprehensive Care']
    },
    {
      id: 'diabetic',
      name: 'Diabetic Profile',
      description: 'Comprehensive diabetes monitoring and complications screening',
      badge: 'Diabetes Care',
      badgeColor: 'bg-blue-500 text-white',
      tests: [
        'CBC (Complete Blood Count)',
        'FBS (Fasting Blood Sugar)',
        'PPBS (Post Prandial Blood Sugar)',
        'Urea',
        'Creatinine',
        'Lipid Profile',
        'HbA1c (Glycated Hemoglobin)',
        'Urine Routine'
      ],
      highlights: ['Diabetes Monitoring', 'Complication Screening', '3-Month Sugar Control']
    },
    {
      id: 'renal',
      name: 'Renal Profile (RFT)',
      description: 'Kidney function assessment and early disease detection',
      tests: [
        'HB (Hemoglobin)',
        'RBS (Random Blood Sugar)',
        'Urea',
        'Creatinine',
        'Electrolytes (Sodium, Potassium, Chloride)',
        'Urine Routine'
      ],
      highlights: ['Kidney Health', 'Early Detection', 'Electrolyte Balance']
    },
    {
      id: 'iron',
      name: 'Iron Profile (with Ferritin)',
      description: 'Iron deficiency and anemia comprehensive evaluation',
      tests: [
        'Serum Iron',
        'TIBC (Total Iron Binding Capacity)',
        'Serum Ferritin'
      ],
      highlights: ['Anemia Diagnosis', 'Iron Storage', 'Deficiency Detection']
    },
    {
      id: 'infertility-female',
      name: 'Infertility Profile (Female)',
      description: 'Hormonal assessment for female fertility evaluation',
      tests: [
        'TFT (Thyroid Function Test)',
        'FSH (Follicle Stimulating Hormone)',
        'LH (Luteinizing Hormone)',
        'PRL (Prolactin)',
        'Testosterone'
      ],
      highlights: ['Fertility Assessment', 'Hormonal Evaluation', 'Reproductive Health']
    },
    {
      id: 'infertility-male',
      name: 'Infertility Profile (Male)',
      description: 'Male fertility assessment with hormonal and semen analysis',
      tests: [
        'TSH (Thyroid Stimulating Hormone)',
        'LH (Luteinizing Hormone)',
        'DHEAS (Dehydroepiandrosterone Sulfate)',
        'Testosterone',
        'Semen Analysis'
      ],
      highlights: ['Male Fertility', 'Hormone Testing', 'Semen Quality']
    },
    {
      id: 'torch',
      name: 'Torch Profile',
      description: 'Comprehensive infection screening for pregnancy planning',
      tests: [
        'Toxoplasmosis IgG & IgM',
        'Rubella IgG & IgM',
        'CMV IgG & IgM',
        'HSV IgG & IgM',
        'Other relevant infections'
      ],
      highlights: ['Infection Screening', 'Pregnancy Safety', 'Fetal Protection']
    },
    {
      id: 'torch-igg',
      name: 'Torch IGG Study',
      description: 'IgG antibody panel for TORCH infections immunity status',
      tests: [
        'Toxoplasmosis IgG',
        'Rubella IgG',
        'CMV IgG',
        'HSV IgG'
      ],
      highlights: ['Immunity Status', 'Past Infection', 'Protection Level']
    },
    {
      id: 'torch-igm',
      name: 'Torch IGM Study',
      description: 'IgM antibody panel for recent TORCH infections detection',
      tests: [
        'Toxoplasmosis IgM',
        'Rubella IgM',
        'CMV IgM',
        'HSV IgM'
      ],
      highlights: ['Recent Infection', 'Active Disease', 'Acute Phase']
    },
    {
      id: 'anc-tsh',
      name: 'ANC Profile with TSH',
      description: 'Antenatal care with thyroid function assessment',
      tests: [
        'CBC (Complete Blood Count)',
        'TSH (Thyroid Stimulating Hormone)',
        'Additional pregnancy-related tests'
      ],
      highlights: ['Pregnancy Care', 'Thyroid Check', 'Maternal Health']
    },
    {
      id: 'double-marker',
      name: 'Double Marker',
      description: 'Early pregnancy screening for chromosomal abnormalities',
      tests: [
        'Free Beta hCG',
        'PAPP-A (Pregnancy Associated Plasma Protein A)',
        'Risk assessment calculation'
      ],
      highlights: ['Genetic Screening', 'Down Syndrome Risk', 'Early Detection']
    },
    {
      id: 'triple-marker',
      name: 'Triple Marker',
      description: 'Mid-pregnancy screening for neural tube defects and chromosomal abnormalities',
      tests: [
        'AFP (Alpha Fetoprotein)',
        'hCG (Human Chorionic Gonadotropin)',
        'Estriol',
        'Risk assessment calculation'
      ],
      highlights: ['Neural Tube Defects', 'Genetic Screening', 'Comprehensive Analysis']
    },
    {
      id: 'quadruple-marker',
      name: 'Quadruple Marker',
      description: 'Enhanced pregnancy screening with four markers for better accuracy',
      tests: [
        'AFP (Alpha Fetoprotein)',
        'hCG (Human Chorionic Gonadotropin)',
        'Estriol',
        'Inhibin A',
        'Advanced risk assessment'
      ],
      highlights: ['Enhanced Accuracy', 'Four Markers', 'Comprehensive Screening']
    }
  ];

  return (
    <Layout 
      title="Health Packages" 
      description="Comprehensive health packages at JS Labs Bengaluru. Master health checkup, diabetes profile, antenatal care, fertility tests, TORCH screening and more. Book affordable health packages today."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-sky-200 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Health Packages
            </h1>
            <p className="text-xl text-muted-foreground">
              Affordable, comprehensive health packages designed for every need
            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                100% Accurate Results
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Fast Reports
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-gradient-to-br from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {healthPackages.map((pkg, index) => {
              const isExpanded = expandedPackages.includes(pkg.id);
              
              return (
                <Card
                  key={pkg.id}
                  className="shadow-medium border-0 bg-white/90 backdrop-blur-sm hover:shadow-large transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-medium flex-shrink-0">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-2 flex-grow">
                          <div className="flex items-center space-x-3">
                            <CardTitle className="text-xl font-bold text-foreground">
                              {pkg.name}
                            </CardTitle>
                            {pkg.badge && (
                              <Badge className={pkg.badgeColor}>
                                <Star className="w-3 h-3 mr-1" />
                                {pkg.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">
                            {pkg.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {pkg.highlights.map((highlight, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 lg:flex-col lg:space-x-0 lg:space-y-3">
                        <Button
                          asChild
                          className="bg-gradient-primary hover:opacity-90 shadow-soft"
                        >
                          <a 
                            href={`https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20package`}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Book Now
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePackage(pkg.id)}
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {isExpanded ? (
                            <>Hide Details <ChevronUp className="w-4 h-4 ml-2" /></>
                          ) : (
                            <>View Details <ChevronDown className="w-4 h-4 ml-2" /></>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent className="pt-0 animate-fade-in">
                      <div className="space-y-4">
                        <div className="border-t border-border/50 pt-6">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <Package className="w-4 h-4 mr-2 text-primary" />
                            Included Tests ({pkg.tests.length})
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {pkg.tests.map((test, testIndex) => (
                              <div
                                key={testIndex}
                                className="flex items-center space-x-3 p-3 bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-foreground font-medium">
                                  {test}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-gradient-primary rounded-lg p-4 text-center">
                          <p className="text-primary-foreground font-medium">
                            Need more information about this package?{' '}
                            <a 
                              href={`https://wa.me/918088039159?text=Hi%2C%20I%20need%20more%20information%20about%20the%20${encodeURIComponent(pkg.name)}%20package`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="underline hover:no-underline font-bold"
                            >
                              Chat with our experts
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-success to-success/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your Health Package Today
            </h2>
            <p className="text-xl text-white/90">
              Preventive healthcare made simple and affordable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-success hover:bg-white/90 font-semibold"
              >
                <a href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20book%20a%20health%20package" target="_blank" rel="noopener noreferrer">
                  Book Package via WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-success hover:bg-white "
              >
                <a href="tel:+918088039159">
                  Call for Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;