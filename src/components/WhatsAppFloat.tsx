import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  return (
    <div className="whatsapp-float">
      <Button
        size="lg"
        asChild
        className="rounded-full w-14 h-14 bg-success hover:bg-success/90 shadow-large"
      >
        <a
          href="https://wa.me/918088039159?text=Hi%2C%20I%20want%20to%20book%20a%20test%20at%20JS%20Labs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;