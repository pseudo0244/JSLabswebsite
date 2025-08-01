import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { ChevronDown, ChevronUp, TestTube2, Heart, Microscope, Activity, Zap, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const testCategories = [
    {
      id: 'blood',
      title: 'Blood Tests',
      icon: TestTube2,
      gradient: 'from-red-500 to-red-400',
      tests: [
        'HB', 'TC', 'DC', 'ESR', 'HB, TC, DC, ESR', 'CBC (Complete Blood Count)',
        'CBC & ESR', 'Haemogram with PS', 'AEC', 'PS Study', 'Blood Group',
        'PCV', 'Platelet Count', 'MP Slide', 'MP Rapid', 'BT CT',
        'FBS / PPBS', 'RBS', 'OGCGT', 'Cholesterol', 'Triglyceride',
        'Lipid Profile', 'LFT (Liver Function Test)', 'RFT (Renal Function Test)',
        'Bilirubin (Total & Direct)', 'SGOT', 'SGPT', 'ALK PHOS',
        'Calcium', 'Uric Acid', 'Urea', 'Creatinine', 'HbA1c (GHB)'
      ]
    },
    {
      id: 'hormonal',
      title: 'Hormonal & Thyroid Tests',
      icon: Activity,
      gradient: 'from-blue-500 to-blue-400',
      tests: [
        'T3 T4 TSH', 'TSH', 'FT3 FT4 TSH', 'FSH', 'LH', 'Prolactin',
        'TFT & Free TFT', 'Testosterone Total', 'Testosterone Free', 'Insulin',
        'IGE', 'Anti TPO', 'DHEAS', 'AMH', 'TPO Antibody', 'Progesterone',
        'Estodial (E2)', 'Cortisol', 'ACTH', 'Anti TG', 'PTH (Parathyroid Hormone)'
      ]
    },
    {
      id: 'immunology',
      title: 'Immunology / Infection / Autoimmune',
      icon: Zap,
      gradient: 'from-purple-500 to-purple-400',
      tests: [
        'HBSAG ELISA', 'ANTI dsDNA', 'Folic Acid', 'CD4 CD8', 'Typhidot',
        'GTT', 'Beta HCG', 'ANA', 'WIDAL', 'VDRL', 'HIV I & II', 'HCV',
        'RA Factor', 'CRP', 'ASLO', 'Dengue Profile (IGG, IGM, NS1Ag)',
        'Leptospira (Card Test & ELISA)', 'Chikungunya', 'Typhidot IGG IGM',
        'Amylase', 'Lipase', 'Electrolytes', 'CPK', 'CA 125', 'CA 15.3',
        'CA 19.9', 'Sodium', 'Potassium', 'Chloride', 'Coombs Direct & Indirect',
        'Serum Iron and TIBC', 'Serum Ferritin', 'Serum LDH', 'Vitamin D3',
        'Vitamin B12', 'Androsteniodine', 'PSA', 'ACLA Antibodies',
        'APLA Antibodies', 'Anti HAV IGM', 'Anti HBC Total', 'Anti HBC IGM',
        'Anti HBE', 'Anti HBS', 'Anti HEV IGM', 'Anti HEV IGG', 'HBeAg',
        'Anti AMA', 'CPK MB', 'PT', 'APTT', 'Anti CCP', 'HLA B27',
        'TB Gold (Quantiferon)', 'TB PCR', 'Rubella IGG & IGM',
        'HSV IGG & IGM', 'TPHA', 'TOXO IGG & IGM'
      ]
    },
    {
      id: 'urine',
      title: 'Urine Tests',
      icon: Microscope,
      gradient: 'from-yellow-500 to-yellow-400',
      tests: [
        'Urine Routine', 'Urine Complete Analysis', 'Urine BS BP',
        'Urine Albumin', 'Urine Ketone Bodies', 'Urine Pregnancy Test',
        'Urine Culture', 'Urine Microalbumin', 'Urine Protein Creatinine Ratio'
      ]
    },
    {
      id: 'stool',
      title: 'Stool Tests',
      icon: Heart,
      gradient: 'from-green-500 to-green-400',
      tests: [
        'Stool Routine', 'Stool Hanging Drop', 'Stool Occult Blood',
        'Stool Culture'
      ]
    },
    {
      id: 'cultures',
      title: 'Sputum, Semen, and Other Cultures',
      icon: Activity,
      gradient: 'from-indigo-500 to-indigo-400',
      tests: [
        'Sputum AFB', 'Sputum Gram Stain', 'Sputum Culture',
        'Pus Culture', 'Semen Culture', 'Semen Analysis'
      ]
    },
    {
      id: 'miscellaneous',
      title: 'Miscellaneous Tests',
      icon: TestTube2,
      gradient: 'from-pink-500 to-pink-400',
      tests: [
        'Serum CEA', 'Troponin T', 'Homocysteine', 'CKMS', 'GGT'
      ]
    }
  ];

  const filteredCategories = testCategories.map(category => ({
    ...category,
    tests: category.tests.filter(test =>
      test.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.tests.length > 0);

  return (
    <Layout 
      title="Our Services" 
      description="Comprehensive diagnostic services at JS Labs Bengaluru. Blood tests, hormonal tests, urine analysis, stool tests, cultures and more. Advanced medical testing with accurate results."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-sky-200 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Diagnostic Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced medical testing with state-of-the-art equipment and expert analysis
            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                500+ Test Types Available
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Same Day Results
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for a specific test..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tests Categories */}
      <section className="py-16 bg-gradient-to-br from-accent to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {filteredCategories.map((category, index) => {
              const IconComponent = category.icon;
              const isExpanded = expandedSections.includes(category.id);
              
              return (
                <Card
                  key={category.id}
                  className="shadow-medium border-0 bg-white/90 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader 
                    className="cursor-pointer hover:bg-accent/50 transition-colors"
                    onClick={() => toggleSection(category.id)}
                  >
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-medium`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-normal">
                            {category.tests.length} tests available
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-primary hover:opacity-90"
                        >
                          <a href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20book%20a%20test%20from%20the%20category%3A%20" target="_blank" rel="noopener noreferrer">
                            Book Now
                          </a>
                        </Button>
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent className="pt-0 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {category.tests.map((test, testIndex) => (
                          <div
                            key={testIndex}
                            className="p-3 bg-gradient-to-r from-accent/30 to-accent/10 rounded-lg border border-border/30 hover:shadow-soft transition-shadow"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {test}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-gradient-primary rounded-lg">
                        <p className="text-primary-foreground text-center font-medium">
                          Need help choosing the right test? 
                          <a 
                            href="https://wa.me/918088039159?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20test" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ml-2 underline hover:no-underline font-bold"
                          >
                            Chat with our experts
                          </a>
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No tests found matching "{searchTerm}". 
                <a 
                  href="https://wa.me/918088039159?text=Hi%2C%20I%20am%20looking%20for%20a%20specific%20test" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium ml-1"
                >
                  Contact us for assistance
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Book Your Test?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Get accurate results with our comprehensive diagnostic services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20book%20a%20diagnostic%20test" target="_blank" rel="noopener noreferrer">
                  Book Test via WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white text-primary"
              >
                <a href="tel:+918088039159">
                  Call +91 8088039159
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;