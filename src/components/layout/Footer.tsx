import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <span className="text-xl font-bold">JS Labs</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Serving Bengaluru with accurate diagnostics, fast reports, and free home collection services.
            </p>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <a 
                href="https://wa.me/918088039159" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                WhatsApp: +91 8088039159
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Shop No 5, Nyanapahalli Main Rd,</p>
                  <p>near DLF New town, opposite to</p>
                  <p>JJ ELITA apartment,</p>
                  <p>Devarachikkana Halli,</p>
                  <p>Bengaluru, Karnataka 560076</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+918088039159" className="text-sm hover:text-white transition-colors">
                  +91 8088039159
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Working Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium">Mon - Thu</p>
                <p className="text-primary-foreground/80">7:00 AM - 2:00 PM</p>
                <p className="text-primary-foreground/80">5:00 PM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Fri - Sat</p>
                <p className="text-primary-foreground/80">7:00 AM - 2:00 PM</p>
                <p className="text-primary-foreground/80">5:00 PM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-medium">Sunday</p>
                <p className="text-primary-foreground/80">7:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-sm hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/packages" className="block text-sm hover:text-white transition-colors">
                Health Packages
              </Link>
              <Link to="/contact" className="block text-sm hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy-policy" className="block text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a 
                href="https://maps.google.com/?q=JS+Labs+Diagnostic+Center+Bengaluru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm hover:text-white transition-colors"
              >
                Find Us on Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © 2024 JS Labs Diagnostic Center. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-sm text-primary-foreground/80">
                Powered by Advanced Medical Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;